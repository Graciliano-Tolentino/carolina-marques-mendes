import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
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
  assert.match(layout, /og-carolina-marques-mendes-advogada-2026\.jpg/);
  assert.match(layout, /Precisa de orientação jurídica\?/);
  const socialImage = await stat(
    new URL("../public/og-carolina-marques-mendes-advogada-2026.jpg", import.meta.url),
  );
  assert.ok(socialImage.size > 0);
  assert.match(layout, /favicon-cmm\.svg/);
  const favicon = await read("public/favicon-cmm.svg");
  assert.match(favicon, />CMM<\/text>/);
  assert.match(favicon, /#071724/);
  assert.match(favicon, /#c4a064/);
  assert.match(await read("app/robots.ts"), /sitemap/);
  assert.match(await read("app/sitemap.ts"), /privacidade/);
});

test("ships the five professional photographs and clear contact paths", async () => {
  const page = await read("app/page.tsx");
  const images = [
    "carolina-marques-mendes-hero.jpg",
    "carolina-marques-mendes-autoridade.jpg",
    "carolina-marques-mendes-proposito.jpg",
    "carolina-marques-mendes-santos.jpg",
    "carolina-marques-mendes-presenca.jpg",
  ];

  assert.match(page, /from "next\/image"/);
  assert.match(page, /wa\.me\/5513974078084/);
  assert.match(page, /sizes="/);

  for (const image of images) {
    assert.match(page, new RegExp(image));
    const file = await stat(new URL(`../public/images/${image}`, import.meta.url));
    assert.ok(file.size > 0);
  }
});

test("documents the GitHub to Vercel to custom-domain flow", async () => {
  const readme = await read("README.md");
  assert.match(readme, /GitHub \(branch main\) → Vercel \(deploy automático\) → domínio personalizado/);
});
