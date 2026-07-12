import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KindBudget collects, uses, stores and protects your information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy should feel clear, too."
      intro="This policy explains what KindBudget collects, why it is needed and the controls available to you."
      updated="June 21, 2026"
    >
      <div className="legal-callout">
        <strong>The short version</strong>
        <p>KindBudget does not sell, rent or trade your personal data. Receipt images stay on your device in the current release, and you can delete your account from inside the app.</p>
      </div>

      <h2>1. Introduction</h2>
      <p>KindBudget (“the App”) is a personal budgeting application developed by AP Software. This Privacy Policy explains how we collect, use and protect your information.</p>

      <h2>2. Information we collect</h2>
      <h3>Account information</h3>
      <p>When you create an account, we collect your email address for authentication and account recovery, your display name for the app and shared budgets, and an optional phone number if you choose to add one to your profile.</p>

      <h3>Financial data</h3>
      <p>KindBudget stores the budgets, categories and transactions you enter. This data is stored on your device and, for supported sync features, in a private Firebase Firestore database. We do not sell or use this financial data for advertising.</p>

      <h3>Receipt images</h3>
      <p>Photos captured for receipt scanning are processed on your device for recognition and budgeting features. In the current release, receipt images are stored locally and are not uploaded to Firebase Storage or Firestore.</p>

      <h3>Analytics</h3>
      <p>KindBudget uses Firebase Analytics for usage information such as app opens and feature use. This helps improve the App. See Apple’s privacy controls and the App’s current privacy disclosure for the controls available on your device.</p>

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
        <li>Supported cloud data is synced through Firebase Firestore with authenticated access rules.</li>
        <li>Firebase Authentication manages account access; the App does not store your password.</li>
        <li>Session information uses the iOS Keychain with device-scoped protection.</li>
        <li>Network traffic is protected by iOS transport security.</li>
      </ul>

      <h2>5. Sharing</h2>
      <p>We do not sell, rent or trade your personal data. Data may be visible to users you explicitly invite to a shared budget, to service providers such as Firebase that operate the App’s infrastructure, or when disclosure is legally required.</p>

      <h2>6. Retention and deletion</h2>
      <p>You can delete your account from <strong>Profile → Delete My Account</strong>. The deletion flow removes the Firebase Authentication account, triggers cleanup of associated cloud data and removes local KindBudget data, including locally stored receipt images. Anonymized analytics cannot be linked back to you after deletion.</p>

      <h2>7. Children’s privacy</h2>
      <p>KindBudget is not directed at children under 13, and we do not knowingly collect personal information from children under 13.</p>

      <h2>8. Your rights</h2>
      <p>Depending on your location, you may have rights to access, correct, delete, object to processing, or request portability of personal data. KindBudget includes CSV export for supported budget data.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this Privacy Policy as KindBudget changes. Material updates will be reflected here and may also be communicated in the App.</p>

      <h2>10. Contact</h2>
      <p>For privacy questions or data requests, email <a href="mailto:privacy@kindbudget.app">privacy@kindbudget.app</a>.</p>
    </LegalPage>
  );
}
