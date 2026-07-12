import Link from "next/link";
import {
  defaultLocale,
  getSiteMessages,
  localeLabels,
  locales,
  localizedPath,
  type Locale,
} from "./i18n";

type LocalizedShellProps = {
  locale?: Locale;
  currentPath?: string;
};

export function Brand({
  light = false,
  locale = defaultLocale,
}: {
  light?: boolean;
  locale?: Locale;
}) {
  const messages = getSiteMessages(locale);

  return (
    <Link
      className={`brand${light ? " brand--light" : ""}`}
      href={localizedPath("/", locale)}
      aria-label={messages.brandHome}
    >
      <img src="/brand/app-icon.png" alt="" width="42" height="42" />
      <bdi>KindBudget</bdi>
    </Link>
  );
}

export function AppStoreBadge({
  compact = false,
  locale = defaultLocale,
}: {
  compact?: boolean;
  locale?: Locale;
}) {
  const messages = getSiteMessages(locale);

  return (
    <a
      className={`store-badge${compact ? " store-badge--compact" : ""}`}
      href="mailto:support@kindbudget.app?subject=KindBudget%20waitlist"
      aria-label={messages.appStoreWaitlist}
    >
      <span className="store-badge__apple" aria-hidden="true">●</span>
      <span>
        <small>{messages.appStoreComingSoon}</small>
        <strong dir="ltr">App Store</strong>
      </span>
    </a>
  );
}

export function LanguageSwitcher({
  locale = defaultLocale,
  currentPath = "/",
}: LocalizedShellProps) {
  const messages = getSiteMessages(locale);

  return (
    <nav className="language-switcher" aria-label={messages.languageSelection}>
      {locales.map((option) => (
        <Link
          key={option}
          href={localizedPath(currentPath, option)}
          hrefLang={option}
          lang={option}
          aria-current={option === locale ? "page" : undefined}
        >
          {localeLabels[option]}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader({
  simple = false,
  locale = defaultLocale,
  currentPath = "/",
}: {
  simple?: boolean;
} & LocalizedShellProps) {
  const messages = getSiteMessages(locale);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Brand locale={locale} />
        {!simple && (
          <nav className="desktop-nav" aria-label={messages.mainNavigation}>
            <Link href={localizedPath("/#features", locale)}>{messages.features}</Link>
            <Link href={localizedPath("/#how-it-works", locale)}>{messages.howItWorks}</Link>
            <Link href={localizedPath("/#faq", locale)}>{messages.faq}</Link>
          </nav>
        )}
        <div className="header-actions">
          <LanguageSwitcher locale={locale} currentPath={currentPath} />
          <AppStoreBadge compact locale={locale} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = defaultLocale }: Pick<LocalizedShellProps, "locale"> = {}) {
  const messages = getSiteMessages(locale);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Brand light locale={locale} />
          <p>{messages.footerDescription}</p>
          <a className="footer-email" href="mailto:support@kindbudget.app" dir="ltr">support@kindbudget.app</a>
        </div>
        <nav className="footer-links" aria-label={messages.legalAndSupport}>
          <div>
            <strong>{messages.product}</strong>
            <Link href={localizedPath("/#features", locale)}>{messages.features}</Link>
            <Link href={localizedPath("/#how-it-works", locale)}>{messages.howItWorks}</Link>
            <Link href={localizedPath("/#faq", locale)}>{messages.faq}</Link>
          </div>
          <div>
            <strong>{messages.helpAndLegal}</strong>
            <Link href={localizedPath("/support", locale)}>{messages.support}</Link>
            <Link href={localizedPath("/privacy", locale)}>{messages.privacyPolicy}</Link>
            <Link href={localizedPath("/terms", locale)}>{messages.termsOfUse}</Link>
            <Link href={localizedPath("/delete-account", locale)}>{messages.deleteAccount}</Link>
          </div>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>{messages.copyright}</span>
        <span>{messages.footerNote}</span>
      </div>
    </footer>
  );
}
