import { readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const dryRun = !process.argv.includes("--delete");
const textExtensions = /\.(astro|css|html|js|json|md|mjs)$/i;
const ignoredDirs = new Set([".astro", ".git", "dist", "node_modules", "public"]);

function walk(dir, visit) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      if (dir === root && ignoredDirs.has(name)) continue;
      walk(path, visit);
      continue;
    }

    visit(path, stats);
  }
}

const sourceText = [];
walk(root, (path) => {
  if (textExtensions.test(path)) sourceText.push(readFileSync(path, "utf8"));
});

const haystack = sourceText.join("\n");
const assetsRoot = join(root, "public/assets");
const assets = [];

walk(assetsRoot, (path, stats) => {
  assets.push({ path, size: stats.size });
});

const unreferenced = assets.filter(({ path }) => {
  const publicPath = relative(join(root, "public"), path).replaceAll("\\", "/");
  return !haystack.includes(publicPath) && !haystack.includes(`/${publicPath}`);
});

const size = unreferenced.reduce((total, asset) => total + asset.size, 0);

for (const { path } of unreferenced) {
  if (!dryRun) rmSync(path);
}

console.log(
  JSON.stringify(
    {
      mode: dryRun ? "dry-run" : "delete",
      totalAssets: assets.length,
      removedAssets: unreferenced.length,
      removedMB: Number((size / 1048576).toFixed(2))
    },
    null,
    2
  )
);
