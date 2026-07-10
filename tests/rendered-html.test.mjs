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
  assert.match(html, /A money habit you will want to return to/);
  assert.match(html, /Paper receipt in\. Clear transaction out/);
  assert.match(html, /30 sec/);
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
    ["/delete-account", /You can leave—and take your data with you/],
    ["/404", /Nothing stressful here/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    assert.match(await response.text(), expected);
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
    "profile.webp",
    "receipt-camera.webp",
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
  assert.match(css, /animation-duration: 0\.01ms/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /grid-template-columns: 1fr/);
});
