import type { ReactNode } from "react";
import { defaultLocale, getSiteMessages, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./site-shell";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
  locale = defaultLocale,
  currentPath = "/",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro: ReactNode;
  updated?: string;
  children: ReactNode;
  locale?: Locale;
  currentPath?: string;
}) {
  const messages = getSiteMessages(locale);

  return (
    <>
      <SiteHeader simple locale={locale} currentPath={currentPath} />
      <main className="legal-main">
        <section className="legal-hero">
          <div className="shell legal-hero__inner">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            {updated && <span className="legal-updated">{messages.lastUpdated} {updated}</span>}
          </div>
        </section>
        <article className="shell legal-document">{children}</article>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
