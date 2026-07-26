import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("uses the native Next.js build", async () => {
  const pkg = JSON.parse(await read("package.json"));
  assert.equal(pkg.scripts.build, "next build");
  assert.equal(pkg.scripts.dev, "next dev");
  assert.equal(pkg.scripts.start, "next start");
  for (const name of ["vinext", "vite", "wrangler", "@cloudflare/vite-plugin", "drizzle-orm"]) {
    assert.equal(pkg.dependencies?.[name], undefined);
    assert.equal(pkg.devDependencies?.[name], undefined);
  }
});

test("includes institutional content and privacy access", async () => {
  const page = await read("app/page.tsx");
  assert.match(page, /Carolina Marques Mendes/);
  assert.match(page, /OAB\/SP 296\.392/);
  assert.match(page, /href="\/privacidade"/);
  assert.match(page, /application\/ld\+json/);
});

test("includes SEO endpoints and excludes preview metadata", async () => {
  const layout = await read("app/layout.tsx");
  assert.doesNotMatch(layout, /codex-preview/);
  assert.match(layout, /openGraph/);
  assert.match(await read("app/robots.ts"), /sitemap/);
  assert.match(await read("app/sitemap.ts"), /privacidade/);
});
