import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getProductSalesHtml, productPageData } from "./product-pages.js";

const root = process.cwd();

export const legacyFiles = [
  "prodotti.html",
  "scienza.html",
  "chi-siamo.html",
  "blog.html",
  "esperto.html",
  "tonico.html",
  "uomo.html",
  "donna.html",
  "probiotic.html",
  "artiplus.html",
  "privacy.html",
  "termini.html"
];

function matchTag(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : "";
}

function rewriteAssetUrls(html) {
  return html
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="assets\//g, 'href="/assets/');
}

// Legacy pages link to "prodotti.html", but Astro serves clean routes ("/prodotti").
// Rewrite internal .html links to their Astro route, preserving any #anchor.
function rewriteInternalLinks(html) {
  return html.replace(
    /href="(?!https?:|\/\/|mailto:|tel:|#)([a-z0-9-]+)\.html(#[^"]*)?"/gi,
    (_match, name, anchor = "") =>
      name === "index"
        ? `href="/${anchor}"`
        : `href="/${name}${anchor}"`
  );
}

function getProductSlug(fileName) {
  const slug = fileName.replace(/\.html$/, "");
  return productPageData[slug] ? slug : "";
}

function injectProductSalesDepth(body, fileName) {
  const slug = getProductSlug(fileName);
  const salesHtml = getProductSalesHtml(slug);
  if (!salesHtml || body.includes("product-sales-depth")) return body;

  const insertionPoint = body.match(/<section class="page-section section-reveal"/);
  if (!insertionPoint) return `${body}${salesHtml}`;

  return `${body.slice(0, insertionPoint.index)}${salesHtml}${body.slice(insertionPoint.index)}`;
}

export function loadLegacyPage(fileName) {
  const html = readFileSync(resolve(root, fileName), "utf8");
  const title = matchTag(html, /<title>([\s\S]*?)<\/title>/i);
  const description = matchTag(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const ogTitle = matchTag(html, /<meta\s+property="og:title"\s+content="([^"]*)"/i) || title;
  const ogDescription = matchTag(html, /<meta\s+property="og:description"\s+content="([^"]*)"/i) || description;
  const ogType = matchTag(html, /<meta\s+property="og:type"\s+content="([^"]*)"/i) || "website";
  const ogImage = matchTag(html, /<meta\s+property="og:image"\s+content="([^"]*)"/i);
  const schema = matchTag(html, /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  const rawBody = matchTag(html, /<body[^>]*>([\s\S]*?)<\/body>/i)
    .replace(/<script\s+src="script\.js"><\/script>/gi, "");
  const body = injectProductSalesDepth(rewriteInternalLinks(rewriteAssetUrls(rawBody)), fileName);

  return {
    title,
    description,
    ogTitle,
    ogDescription,
    ogType,
    ogImage: ogImage ? rewriteAssetUrls(ogImage).replace(/^([^/])/, "/$1") : "",
    schema,
    body
  };
}
