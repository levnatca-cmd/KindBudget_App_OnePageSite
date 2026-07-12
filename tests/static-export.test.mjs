import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const out = new URL("../out/", import.meta.url);
const publishedRoot = new URL("../", import.meta.url);

async function exportedHtml(path) {
  return readFile(new URL(path, out), "utf8");
}

test("exports the landing page and every public route for GitHub Pages", async () => {
  const routes = [
    ["index.html", /Budgeting that feels/],
    ["privacy/index.html", /Privacy should feel clear/],
    ["terms/index.html", /Simple terms for a simple budgeting app/],
    ["support/index.html", /A little help, without the runaround/],
    ["delete-account/index.html", /You can delete your account and associated data/],
    ["404.html", /Nothing stressful here/],
    ["ru/index.html", /Бюджет —/],
    ["ru/privacy/index.html", /Конфиденциальность тоже должна быть понятной/],
    ["ru/terms/index.html", /Понятные условия для простого приложения/],
    ["ru/support/index.html", /Помощь без лишних сложностей/],
    ["ru/delete-account/index.html", /Вы можете удалить аккаунт и связанные с ним данные/],
    ["ru/404/index.html", /Ничего страшного/],
    ["he/index.html", /ניהול תקציב/],
    ["he/privacy/index.html", /גם פרטיות צריכה להיות ברורה/],
    ["he/terms/index.html", /תנאים פשוטים לאפליקציה פשוטה לניהול תקציב/],
    ["he/support/index.html", /קצת עזרה/],
    ["he/delete-account/index.html", /אפשר למחוק את החשבון ואת הנתונים המשויכים אליו/],
    ["he/404/index.html", /אין כאן שום/],
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

test("exports locale semantics, alternate links and localized sitemap entries", async () => {
  const [russian, hebrew, sitemap] = await Promise.all([
    exportedHtml("ru/index.html"),
    exportedHtml("he/index.html"),
    readFile(new URL("sitemap.xml", out), "utf8"),
  ]);

  assert.match(russian, /^<!DOCTYPE html><html[^>]*lang="ru"[^>]*dir="ltr"/);
  assert.match(russian, /hrefLang="he"|hreflang="he"/i);
  assert.match(hebrew, /^<!DOCTYPE html><html[^>]*lang="he"[^>]*dir="rtl"/);
  assert.match(hebrew, /hrefLang="ru"|hreflang="ru"/i);
  assert.match(sitemap, /https:\/\/kindbudget\.ca\/ru\/privacy\//);
  assert.match(sitemap, /https:\/\/kindbudget\.ca\/he\/privacy\//);
  assert.match(sitemap, /hreflang="x-default"/i);
});

test("prepares the committed main/root publishing source", async () => {
  const [exportedHome, publishedHome, cname, manifestText] = await Promise.all([
    readFile(new URL("index.html", out)),
    readFile(new URL("index.html", publishedRoot)),
    readFile(new URL("CNAME", publishedRoot), "utf8"),
    readFile(new URL("pages-root-manifest.json", publishedRoot), "utf8"),
  ]);

  assert.deepEqual(publishedHome, exportedHome);
  assert.equal(cname.trim(), "kindbudget.ca");
  const manifest = JSON.parse(manifestText);
  assert.ok(manifest.entries.includes("index.html"));
  assert.ok(manifest.entries.includes("_next"));
  await access(new URL(".nojekyll", publishedRoot));
  await access(new URL("privacy/index.html", publishedRoot));
  await access(new URL("ru/privacy/index.html", publishedRoot));
  await access(new URL("he/privacy/index.html", publishedRoot));
  await access(new URL("screens/receipt-camera-premium.webp", publishedRoot));
  await access(new URL("_next/", publishedRoot));
});
