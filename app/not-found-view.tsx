import Link from "next/link";
import { defaultLocale, getSiteMessages, localizedPath, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./site-shell";

export function NotFoundView({
  locale = defaultLocale,
  currentPath = "/404",
}: {
  locale?: Locale;
  currentPath?: string;
} = {}) {
  const messages = getSiteMessages(locale);

  return (
    <>
      <SiteHeader simple locale={locale} currentPath={currentPath} />
      <main className="not-found">
        <div className="not-found__inner">
          <img src="/brand/buddy-peek.png" alt={messages.notFoundImageAlt} />
          <span className="error-code">{messages.notFoundCode}</span>
          <h1>{messages.notFoundTitle}</h1>
          <p>{messages.notFoundBody}</p>
          <Link className="primary-button" href={localizedPath("/", locale)}>{messages.notFoundBack}</Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
