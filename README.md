# KindBudget One-Page Site

The public product and App Store support site for KindBudget: a calmer way to track spending, scan receipts and manage shared budgets.

## Included pages

- `/` — responsive English product landing page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use
- `/support` — support information and common questions
- `/delete-account` — account deletion instructions
- `/404` — branded error page

Product images use seeded KindBudget demo data. No real user financial information is included.

## Local development

Node.js `>=22.13.0` is required.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run test:pages
```

These commands verify both the production worker and the static GitHub Pages export, including the main page, required routes, legal copy safeguards, product images and responsive accessibility rules.

## Deployment

GitHub Pages publishes the generated static files from the root of `main` to [kindbudget.ca](https://kindbudget.ca). Before publishing a site change, run:

```bash
npm run test:pages
git add -A
```

The preparation script creates the static export, safely replaces only its generated root entries, preserves the custom domain, and disables Jekyll so Next.js `_next` assets remain available. In **Settings → Pages**, the publishing source stays `main` and `/(root)`.

## Content notes

- The current call to action is a waitlist email because the App Store listing is not live yet.
- EN is active. RU and HE are shown as planned languages and are not interactive.
- Privacy and account-deletion wording should stay aligned with the app policy in the main KindBudget repository.
