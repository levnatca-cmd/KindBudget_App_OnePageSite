import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KindBudget collects, uses, stores and protects your information.",
  alternates: {
    canonical: "/privacy/",
    languages: {
      en: "/privacy/",
      ru: "/ru/privacy/",
      he: "/he/privacy/",
      "x-default": "/privacy/",
    },
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      currentPath="/privacy"
      eyebrow="Privacy Policy"
      title="Privacy should feel clear, too."
      intro="This policy explains what KindBudget collects, why it is needed and the controls available to you."
      updated="June 21, 2026"
    >
      <div className="legal-callout">
        <strong>The short version</strong>
        <p>KindBudget does not sell, rent or trade your personal data. In the version described by this policy, receipt images stay on your device, and you can delete your account from inside the app.</p>
      </div>

      <h2>1. Introduction</h2>
      <p>KindBudget (“the App”) is a personal budgeting application developed by AP Software. This Privacy Policy explains how we collect, use and protect your information.</p>

      <h2>2. Information we collect</h2>
      <h3>Account information</h3>
      <p>When you create an account, we collect your email address for authentication and account recovery, your display name for the app and shared budgets, and an optional phone number if you choose to add one to your profile.</p>

      <h3>Financial data</h3>
      <p>KindBudget stores the budgets, categories and transactions you enter. This data is stored on your device and, for supported sync features, in Cloud Firestore, with access controlled by authentication and security rules. We do not sell or use this financial data for advertising.</p>

      <h3>Receipt images</h3>
      <p>Photos captured for receipt scanning are processed on your device for recognition and budgeting features. In the version described by this policy, receipt images are stored locally and are not uploaded to Cloud Storage for Firebase or Cloud Firestore.</p>

      <h3>Analytics</h3>
      <p>KindBudget uses Firebase Analytics for usage information such as app opens and feature use. This helps improve the App. Review your iPhone privacy settings and KindBudget’s App Store privacy details for available controls.</p>

      <h2>3. How we use information</h2>
      <ul>
        <li>To authenticate your account and support account recovery.</li>
        <li>To provide budgets, transactions, categories, analytics and exports.</li>
        <li>To make shared budgets available to people you explicitly invite.</li>
        <li>To process receipt details on your device.</li>
        <li>To maintain, secure and improve the App.</li>
      </ul>

      <h2>4. Storage and security</h2>
      <ul>
        <li>Local data uses iOS File Protection.</li>
        <li>Supported cloud data is synced through Cloud Firestore with authenticated access rules.</li>
        <li>Firebase Authentication manages account access; the App does not store your password.</li>
        <li>Session information uses the iOS Keychain with device-scoped protection.</li>
        <li>Network connections use Apple’s App Transport Security requirements.</li>
      </ul>

      <h2>5. Sharing</h2>
      <p>We do not sell, rent or trade your personal data. Data may be visible to users you explicitly invite to a shared budget, to service providers such as Firebase that operate the App’s infrastructure, or when disclosure is legally required.</p>

      <h2>6. Retention and deletion</h2>
      <p>You can delete your account from <strong>Profile → Delete My Account</strong>. The deletion flow removes the Firebase Authentication account, starts deletion of associated cloud data subject to the shared-budget and retention rules described at confirmation, and removes local KindBudget data on that device, including locally stored receipt images. Analytics data may be retained in aggregated or de-identified form in accordance with our service providers’ retention practices.</p>

      <h2>7. Children’s privacy</h2>
      <p>KindBudget is not directed at children under 13, and we do not knowingly collect personal information from children under 13.</p>

      <h2>8. Your rights</h2>
      <p>Depending on your location, you may have rights to access, correct or delete your personal data, object to its processing, or request a portable copy. KindBudget includes CSV export for supported budget data.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this Privacy Policy as KindBudget changes. Material updates will be reflected here and may also be communicated in the App.</p>

      <h2>10. Contact</h2>
      <p>For privacy questions or data requests, email <a href="mailto:privacy@kindbudget.app">privacy@kindbudget.app</a>.</p>
    </LegalPage>
  );
}
