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
```

This builds the production worker and verifies the main page, required routes, legal copy safeguards, product images and responsive accessibility rules.

## Content notes

- The current call to action is a waitlist email because the App Store listing is not live yet.
- EN is active. RU and HE are shown as planned languages and are not interactive.
- Privacy and account-deletion wording should stay aligned with the app policy in the main KindBudget repository.
