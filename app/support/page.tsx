import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with KindBudget, receipt scanning, syncing, shared budgets and your account.",
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="KindBudget Support"
      title="A little help, without the runaround."
      intro="Start with the quick answers below. If you are still stuck, email us and we will help you sort it out."
    >
      <div className="support-cards">
        <div className="support-card">
          <span aria-hidden="true">✉</span>
          <strong>Email support</strong>
          <p><a href="mailto:support@kindbudget.app">support@kindbudget.app</a><br />Typical response time: within 48 hours.</p>
        </div>
        <div className="support-card">
          <span aria-hidden="true">◉</span>
          <strong>System requirements</strong>
          <p>iPhone with iOS 18.2 or later. Internet is needed for account creation and sync.</p>
        </div>
      </div>

      <h2>Getting started</h2>
      <h3>How do I create my first budget?</h3>
      <p>After signing in, choose the create-budget action, add a name, select USD, CAD, EUR or GBP, and set the starting values that fit your plan.</p>

      <h3>Can I have more than one budget?</h3>
      <p>Yes. The number of personal or shared budgets available depends on your current KindBudget plan.</p>

      <h2>Transactions and receipts</h2>
      <h3>How do I add a transaction?</h3>
      <p>Open a budget, tap the central add button, enter the amount and category, and add an optional note. You can also start with a receipt scan.</p>

      <h3>The scanner cannot read my receipt.</h3>
      <p>Use even lighting, hold the phone steady and keep the full printed receipt inside the frame. Faded, handwritten or folded receipts may not scan reliably. Always review the detected total.</p>

      <h2>Shared budgets</h2>
      <h3>How do I invite someone?</h3>
      <p>Open a supported shared budget, go to its settings and choose the invite action. The person needs a KindBudget account to accept.</p>

      <h3>Can a shared member see all of my data?</h3>
      <p>No. Shared members can access only the shared budgets they have joined. Your other personal budgets remain separate.</p>

      <h2>Account and sync</h2>
      <h3>My data is not syncing.</h3>
      <p>Confirm both devices use the same account and have an internet connection. Refresh the current screen and allow a moment for pending changes to finish.</p>

      <h3>I forgot my password.</h3>
      <p>Choose the password-reset option on the sign-in screen and follow the link sent to your email address.</p>

      <h3>How do I delete my account?</h3>
      <p>Open <strong>Profile → Delete My Account</strong> and complete both confirmation steps. See the <a href="/delete-account">account deletion guide</a> for details.</p>

      <h2>When you contact us</h2>
      <p>To help us respond quickly, include your iPhone model, iOS version, KindBudget version from Profile, and a clear description of what happened. Do not email passwords, full receipt images or sensitive financial details.</p>
    </LegalPage>
  );
}
