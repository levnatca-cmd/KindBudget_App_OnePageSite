import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Delete Account",
  description: "How to permanently delete your KindBudget account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      eyebrow="Account deletion"
      title="You can leave—and take your data with you."
      intro="KindBudget includes an in-app flow to permanently delete your account and associated data."
    >
      <div className="legal-callout">
        <strong>Before you begin</strong>
        <p>Account deletion is permanent. Export any budget data you want to keep and make sure other shared-budget members have what they need first.</p>
      </div>

      <h2>Delete your account in the App</h2>
      <ol>
        <li>Open KindBudget and sign in to the account you want to delete.</li>
        <li>Open <strong>Profile</strong>.</li>
        <li>Tap <strong>Delete My Account</strong>.</li>
        <li>Review the consequences and choose Continue.</li>
        <li>Confirm the permanent deletion. You may be asked to verify your identity again.</li>
        <li>Keep KindBudget open until the deletion finishes.</li>
      </ol>

      <h2>What deletion removes</h2>
      <ul>
        <li>Your Firebase Authentication account.</li>
        <li>Budgets and data owned by your account, subject to the shared-budget rules shown before confirmation.</li>
        <li>Local KindBudget data and session information on the device.</li>
        <li>Locally stored receipt images and generated local files.</li>
      </ul>

      <h2>Shared budgets</h2>
      <p>Deleting an account can affect budgets you own or share with other people. Review the in-app confirmation carefully. If needed, coordinate with shared members before deletion.</p>

      <h2>If you cannot access the App</h2>
      <p>Email <a href="mailto:privacy@kindbudget.app?subject=KindBudget%20account%20deletion">privacy@kindbudget.app</a> from the address associated with your account. We may need to verify ownership before processing a deletion request. Never send your password.</p>

      <h2>Need help?</h2>
      <p>Contact <a href="mailto:support@kindbudget.app">support@kindbudget.app</a> or visit the <a href="/support">Support page</a>.</p>
    </LegalPage>
  );
}
