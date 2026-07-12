import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use KindBudget.",
  alternates: {
    canonical: "/terms/",
    languages: {
      en: "/terms/",
      ru: "/ru/terms/",
      he: "/he/terms/",
      "x-default": "/terms/",
    },
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      currentPath="/terms"
      eyebrow="Terms of Use"
      title="Simple terms for a simple budgeting app."
      intro="These terms describe KindBudget’s service, your responsibilities and the limits of the App."
      updated="June 3, 2026"
    >
      <h2>1. Acceptance</h2>
      <p>By downloading, installing or using KindBudget (“the App”), you agree to these Terms of Use. If you do not agree, do not use the App.</p>

      <h2>2. The service</h2>
      <p>KindBudget is a personal budgeting tool that lets you create and manage budgets, track income and expenses, scan receipts, share eligible budgets and view spending analytics and trends.</p>

      <h2>3. Accounts</h2>
      <ul>
        <li>You must create an account to use the App.</li>
        <li>You may sign in using supported Apple, Google or email options.</li>
        <li>You are responsible for the accuracy of the information you provide and for protecting access to your account.</li>
        <li>Tell us promptly if you believe your account has been used without permission.</li>
      </ul>

      <h2>4. Your responsibilities</h2>
      <p>You agree to use KindBudget lawfully and not to interfere with or abuse the App or its services, reverse-engineer the App, or distribute it unlawfully.</p>

      <h2>5. Financial information disclaimer</h2>
      <div className="legal-callout">
        <strong>KindBudget is a tracking tool, not financial advice.</strong>
        <p>The App does not connect to bank accounts or process payments. Financial data is self-reported, and receipt recognition may be inaccurate. Always verify detected totals before saving.</p>
      </div>

      <h2>6. Shared budgets</h2>
      <p>People invited to a shared budget can view and edit data according to their assigned role and the features available under the applicable plan. You are responsible for whom you invite. Budget owners can remove participants, which revokes their access to that shared budget.</p>

      <h2>7. Your data</h2>
      <p>You retain ownership of the data you enter. You give AP Software the limited permission needed to store, sync and process that data solely to provide KindBudget. Supported data can be exported, and your account can be deleted from inside the App.</p>

      <h2>8. Intellectual property</h2>
      <p>The App, its design, code and branding belong to AP Software. “KindBudget” and the App icon are AP Software property and may not be copied or distributed without permission.</p>

      <h2>9. Third-party services</h2>
      <p>KindBudget uses Firebase Authentication, Cloud Firestore, Firebase Analytics, Sign in with Google and Sign in with Apple. Those services are governed by their own terms and privacy practices.</p>

      <h2>10. Availability</h2>
      <p>We work to keep KindBudget available but cannot promise uninterrupted service. Local features may work offline; account creation and sync require internet access. We may change or discontinue features, subject to applicable law.</p>

      <h2>11. Limitation of liability</h2>
      <p>To the maximum extent allowed by law, KindBudget is provided “as is.” AP Software is not responsible for financial decisions, inaccurate receipt recognition, sync conflicts or indirect losses arising from use of the App. Total liability will not exceed the amount you paid for the App, if any.</p>

      <h2>12. Termination</h2>
      <p>You may stop using KindBudget and delete your account at any time. Accounts that violate these terms may be suspended or terminated.</p>

      <h2>13. Changes</h2>
      <p>These terms may be updated. Material changes will be communicated through the App or this website. Where required, we will provide notice or request consent before revised terms take effect.</p>

      <h2>14. Governing law</h2>
      <p>These terms are governed by the laws of the jurisdiction where AP Software is registered, subject to any consumer rights that cannot be waived.</p>

      <h2>15. Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:support@kindbudget.app">support@kindbudget.app</a>.</p>
    </LegalPage>
  );
}
