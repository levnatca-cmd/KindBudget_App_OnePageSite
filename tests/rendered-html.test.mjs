import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the KindBudget product landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>KindBudget — Budgeting that feels kind<\/title>/i);
  assert.match(html, /Budgeting that feels/);
  assert.match(html, /Better budgets, together/);
  assert.match(html, /Designed to feel good every day/);
  assert.match(html, /A money habit designed to be easy to return to/);
  assert.match(html, /Paper receipt in\. Clear transaction out/);
  assert.match(html, /30 sec/);
  assert.match(html, /Capture for review/);
  assert.match(html, /receipt-camera-premium\.webp/);
  assert.doesNotMatch(html, /receipt-camera-costco\.webp/);
  assert.match(html, /profile-user\.webp/);
  assert.match(html, /See exactly what KindBudget detects/);
  assert.match(html, /On-device OCR/);
  assert.match(html, /Review output/);
  assert.match(html, /Costco Wholesale/);
  assert.match(html, /\$57\.02 CAD/);
  assert.match(html, /Receipt tools/);
  assert.match(html, /Category picker/);
  assert.match(html, /Privacy, in plain language/);
  assert.match(html, /USD, CAD, EUR and GBP/);
  assert.match(html, /support@kindbudget\.app/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders required App Store support and legal routes", async () => {
  const routes = [
    ["/privacy", /Privacy should feel clear/],
    ["/terms", /Simple terms for a simple budgeting app/],
    ["/support", /A little help, without the runaround/],
    ["/delete-account", /You can delete your account and associated data/],
    ["/404", /Nothing stressful here/],
    ["/ru/privacy", /Конфиденциальность тоже должна быть понятной/],
    ["/ru/terms", /Понятные условия для простого приложения/],
    ["/ru/support", /Помощь без лишних сложностей/],
    ["/ru/delete-account", /Вы можете удалить аккаунт и связанные с ним данные/],
    ["/ru/404", /Ничего страшного/],
    ["/he/privacy", /גם פרטיות צריכה להיות ברורה/],
    ["/he/terms", /תנאים פשוטים לאפליקציה פשוטה לניהול תקציב/],
    ["/he/support", /קצת עזרה/],
    ["/he/delete-account", /אפשר למחוק את החשבון ואת הנתונים המשויכים אליו/],
    ["/he/404", /אין כאן שום/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    assert.match(await response.text(), expected);
  }
});

test("renders localized home pages with working language and direction semantics", async () => {
  const russian = await (await render("/ru")).text();
  assert.match(russian, /Бюджет —/);
  assert.match(russian, /по-доброму/);
  assert.match(russian, /^<!DOCTYPE html><html[^>]*lang="ru"[^>]*dir="ltr"/);
  assert.match(russian, /href="\/he"/);
  assert.match(russian, /hreflang="he"/i);

  const hebrew = await (await render("/he")).text();
  assert.match(hebrew, /ניהול תקציב/);
  assert.match(hebrew, /^<!DOCTYPE html><html[^>]*lang="he"[^>]*dir="rtl"/);
  assert.match(hebrew, /href="\/ru"/);
  assert.match(hebrew, /receipt-camera-premium\.webp/);
});

test("publishes locale-aware canonicals and alternate-language links", async () => {
  const routes = ["", "privacy", "terms", "support", "delete-account", "404"];
  const locales = [
    { locale: "en", prefix: "", dir: null },
    { locale: "ru", prefix: "/ru", dir: "ltr" },
    { locale: "he", prefix: "/he", dir: "rtl" },
  ];

  for (const { locale, prefix, dir } of locales) {
    for (const route of routes) {
      const suffix = route ? `/${route}` : "";
      const path = `${prefix}${suffix}` || "/";
      const canonicalPath = path === "/" ? "/" : `${path}/`;
      const html = await (await render(path)).text();
      assert.match(html, new RegExp(`rel="canonical" href="https://kindbudget\\.ca${canonicalPath}"`));
      assert.match(html, /hreflang="en"/i);
      assert.match(html, /hreflang="ru"/i);
      assert.match(html, /hreflang="he"/i);
      assert.match(html, /hreflang="x-default"/i);
      assert.match(html, new RegExp(`^<!DOCTYPE html><html[^>]*lang="${locale}"`));
      if (dir) assert.match(html, new RegExp(`^<!DOCTYPE html><html[^>]*dir="${dir}"`));
    }
  }
});

test("keeps the current route when switching languages", async () => {
  for (const route of ["privacy", "terms", "support", "delete-account", "404"]) {
    const english = await (await render(`/${route}`)).text();
    assert.ok(english.includes(`href="/${route}"`), `EN ${route} should link to EN peer`);
    assert.ok(english.includes(`href="/ru/${route}"`), `EN ${route} should link to RU peer`);
    assert.ok(english.includes(`href="/he/${route}"`), `EN ${route} should link to HE peer`);

    const russian = await (await render(`/ru/${route}`)).text();
    assert.ok(russian.includes(`href="/${route}"`), `RU ${route} should link to EN peer`);
    assert.ok(russian.includes(`href="/ru/${route}"`), `RU ${route} should link to RU peer`);
    assert.ok(russian.includes(`href="/he/${route}"`), `RU ${route} should link to HE peer`);

    const hebrew = await (await render(`/he/${route}`)).text();
    assert.ok(hebrew.includes(`href="/${route}"`), `HE ${route} should link to EN peer`);
    assert.ok(hebrew.includes(`href="/ru/${route}"`), `HE ${route} should link to RU peer`);
    assert.ok(hebrew.includes(`href="/he/${route}"`), `HE ${route} should link to HE peer`);
  }
});

test("keeps privacy and deletion claims aligned with the current app policy", async () => {
  const privacy = await (await render("/privacy")).text();
  assert.match(privacy, /does not sell, rent or trade your personal data/i);
  assert.match(privacy, /receipt images are stored locally/i);
  assert.match(privacy, /Profile → Delete My Account/);

  const deletion = await (await render("/delete-account")).text();
  assert.match(deletion, /Account deletion is permanent/);
  assert.match(deletion, /Firebase Authentication account/);
  assert.match(deletion, /locally stored receipt images/i);

  const russianPrivacy = await (await render("/ru/privacy")).text();
  assert.match(russianPrivacy, /изображения чеков хранятся локально/i);
  assert.match(russianPrivacy, /Аналитические данные могут храниться/i);
  assert.match(russianPrivacy, /правил совместных бюджетов и хранения/i);

  const hebrewPrivacy = await (await render("/he/privacy")).text();
  assert.match(hebrewPrivacy, /תמונות הקבלות נשמרות מקומית/);
  assert.match(hebrewPrivacy, /נתוני ניתוח שימוש עשויים להישמר/);
  assert.match(hebrewPrivacy, /כללי התקציבים המשותפים ושמירת הנתונים/);

  const russianDeletion = await (await render("/ru/delete-account")).text();
  assert.match(russianDeletion, /на устройстве, на котором вы выполняете удаление/i);

  const hebrewDeletion = await (await render("/he/delete-account")).text();
  assert.match(hebrewDeletion, /במכשיר שבו הושלמה המחיקה/);
});

test("ships every product image and responsive accessibility safeguard", async () => {
  const imageNames = [
    "add-transaction.webp",
    "analytics.webp",
    "category-picker.webp",
    "create-budget-form.webp",
    "create-budget.webp",
    "daily-check-in.webp",
    "day-transactions.webp",
    "home-dashboard.webp",
    "profile-user.webp",
    "receipt-camera.webp",
    "receipt-camera-premium.webp",
    "receipt-options.webp",
    "shared-budget.webp",
  ];

  for (const imageName of imageNames) {
    await access(new URL(`../public/screens/${imageName}`, import.meta.url));
  }

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.signature-showcase/);
  assert.match(css, /\.hero-metrics/);
  assert.match(css, /\.receipt-journey/);
  assert.match(css, /\.phone--review/);
  assert.match(css, /animation-duration: 0\.01ms/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /grid-template-columns: 1fr/);
  assert.match(css, /\.locale-root\[dir="rtl"\]/);
  assert.match(css, /unicode-bidi: isolate/);
});
