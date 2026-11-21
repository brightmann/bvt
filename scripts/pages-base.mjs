// Rewrites root-relative URLs in the static build so the site works when
// served from a sub-path. GitHub Pages serves this repo at /<repo>/, so run
// this after `npm run build` with the base path as the only argument:
//   node scripts/pages-base.mjs /bvt
// Only build output (dist/) is rewritten; source files are untouched.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const base = process.argv[2];
if (!base || !base.startsWith("/") || base.endsWith("/") || base.length < 2) {
  throw new Error("Usage: node scripts/pages-base.mjs /<base-path>");
}
const escaped = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const attrPattern = new RegExp(
  `(href|src|poster|action)="\\/(?!\\/|${escaped}(\\/|"|$))`,
  "g",
);
const cssPattern = new RegExp(`url\\(\\/(?!\\/|${escaped}\\/)`, "g");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let rewritten = 0;
for await (const path of walk("./dist")) {
  let pattern;
  if (/\.(html|xml|txt)$/.test(path)) pattern = attrPattern;
  else if (path.endsWith(".css")) pattern = cssPattern;
  else continue;
  const text = await readFile(path, "utf8");
  const out = text.replace(pattern, (match) =>
    match.startsWith("url(") ? `url(${base}/` : `${match}${base.slice(1)}/`,
  );
  if (out !== text) {
    await writeFile(path, out);
    rewritten++;
  }
}
console.log(`Prefixed ${rewritten} file(s) with base path ${base}`);
