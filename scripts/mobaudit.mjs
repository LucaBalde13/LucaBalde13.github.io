import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:4322/';
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2, isMobile: true, hasTouch: true,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const report = await page.evaluate(() => {
  const out = { tinyText: [], smallTaps: [], tightLineLen: [] };
  const seen = new Set();
  document.querySelectorAll('a, button, summary, [role=button]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    if (r.height < 40 || r.width < 40) {
      const k = el.tagName + (el.className||'').toString().slice(0,30);
      if (!seen.has(k)) { seen.add(k); out.smallTaps.push({ tag: el.tagName, cls:(el.className||'').toString().slice(0,30), w:Math.round(r.width), h:Math.round(r.height), txt:(el.textContent||'').trim().slice(0,20) }); }
    }
  });
  document.querySelectorAll('p, span, li, a, h1,h2,h3,h4,small').forEach(el => {
    const cs = getComputedStyle(el);
    const fs = parseFloat(cs.fontSize);
    if (fs > 0 && fs < 13 && el.textContent.trim().length > 4) {
      const k = el.tagName+(el.className||'').toString().slice(0,30)+fs;
      if (!seen.has('t'+k)) { seen.add('t'+k); out.tinyText.push({ tag:el.tagName, cls:(el.className||'').toString().slice(0,30), fs, txt:el.textContent.trim().slice(0,25) }); }
    }
  });
  return out;
});
console.log('=== TINY TEXT (<13px) ===');
console.log(JSON.stringify(report.tinyText, null, 1));
console.log('=== SMALL TAP TARGETS (<40px) ===');
console.log(JSON.stringify(report.smallTaps, null, 1));
await browser.close();
