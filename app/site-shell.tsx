import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand${light ? " brand--light" : ""}`} href="/" aria-label="KindBudget home">
      <img src="/brand/app-icon.png" alt="" width="42" height="42" />
      <span>KindBudget</span>
    </Link>
  );
}

export function AppStoreBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`store-badge${compact ? " store-badge--compact" : ""}`}
      href="mailto:support@kindbudget.app?subject=KindBudget%20waitlist"
      aria-label="Join the KindBudget App Store waitlist"
    >
      <span className="store-badge__apple" aria-hidden="true">●</span>
      <span>
        <small>Coming soon on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  );
}

export function SiteHeader({ simple = false }: { simple?: boolean }) {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Brand />
        {!simple && (
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="/#features">Features</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#faq">FAQ</a>
          </nav>
        )}
        <div className="header-actions">
          {!simple && (
            <div className="language-switcher" aria-label="Language selection">
              <span aria-current="true">EN</span>
              <span title="Russian is planned for the next release" aria-disabled="true">RU</span>
              <span title="Hebrew is planned for the next release" aria-disabled="true">HE</span>
            </div>
          )}
          <AppStoreBadge compact />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Brand light />
          <p>Personal and shared budgeting with less pressure and more clarity.</p>
          <a className="footer-email" href="mailto:support@kindbudget.app">support@kindbudget.app</a>
        </div>
        <nav className="footer-links" aria-label="Legal and support">
          <div>
            <strong>Product</strong>
            <a href="/#features">Features</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div>
            <strong>Help & legal</strong>
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/delete-account">Delete Account</Link>
          </div>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 AP Software. All rights reserved.</span>
        <span>Made to make money feel lighter.</span>
      </div>
    </footer>
  );
}
