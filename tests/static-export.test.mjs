import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const out = new URL("../out/", import.meta.url);
const docs = new URL("../docs/", import.meta.url);

async function exportedHtml(path) {
  return readFile(new URL(path, out), "utf8");
}

test("exports the landing page and every public route for GitHub Pages", async () => {
  const routes = [
    ["index.html", /Budgeting that feels/],
    ["privacy/index.html", /Privacy should feel clear/],
    ["terms/index.html", /Simple terms for a simple budgeting app/],
    ["support/index.html", /A little help, without the runaround/],
    ["delete-account/index.html", /You can leave—and take your data with you/],
    ["404.html", /Nothing stressful here/],
  ];

  for (const [path, expected] of routes) {
    const html = await exportedHtml(path);
    assert.match(html, expected, `${path} should contain its route content`);
  }
});

test("exports the premium receipt flow and required static assets", async () => {
  const html = await exportedHtml("index.html");
  assert.match(html, /receipt-camera-premium\.webp/);
  assert.doesNotMatch(html, /receipt-camera-costco\.webp/);
  assert.match(html, /https:\/\/kindbudget\.ca/);

  await access(new URL("screens/receipt-camera-premium.webp", out));
  await access(new URL("og.png", out));
  await access(new URL("robots.txt", out));
  await access(new URL("sitemap.xml", out));
  await access(new URL("_next/", out));
});

test("prepares the committed main/docs publishing source", async () => {
  const [exportedHome, publishedHome, cname] = await Promise.all([
    readFile(new URL("index.html", out)),
    readFile(new URL("index.html", docs)),
    readFile(new URL("CNAME", docs), "utf8"),
  ]);

  assert.deepEqual(publishedHome, exportedHome);
  assert.equal(cname, "kindbudget.ca\n");
  await access(new URL(".nojekyll", docs));
  await access(new URL("privacy/index.html", docs));
  await access(new URL("screens/receipt-camera-premium.webp", docs));
  await access(new URL("_next/", docs));
});
