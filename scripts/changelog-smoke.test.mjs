import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { test } from "node:test";

const { releases } = JSON.parse(readFileSync(resolve("src/data/changelog.json"), "utf8"));

test("la build pública incluye novedades, enlace y sitemap", () => {
  const output = resolve("dist/changelog/index.html");
  assert.ok(existsSync(output), "Falta /changelog/index.html");
  const html = readFileSync(output, "utf8");
  assert.match(html, /<h1/);
  for (const release of releases) {
    assert.ok(html.includes(release.title));
    for (const section of release.sections) {
      for (const item of section.items) {
        assert.ok(html.includes(item));
      }
    }
  }
  assert.ok(html.includes('href="/changelog"'));
  assert.ok(readFileSync(resolve("dist/sitemap.xml"), "utf8").includes("/changelog</loc>"));
});
