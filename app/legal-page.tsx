import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./site-shell";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader simple />
      <main className="legal-main">
        <section className="legal-hero">
          <div className="shell legal-hero__inner">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            {updated && <span className="legal-updated">Last updated {updated}</span>}
          </div>
        </section>
        <article className="shell legal-document">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
