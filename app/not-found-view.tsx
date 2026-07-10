import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

export function NotFoundView() {
  return (
    <>
      <SiteHeader simple />
      <main className="not-found">
        <div className="not-found__inner">
          <img src="/brand/buddy-peek.png" alt="KindBudget buddy peeking" />
          <span className="error-code">404 · that page wandered off</span>
          <h1>Nothing stressful here.</h1>
          <p>The page you were looking for does not exist or may have moved. Your budget is safe.</p>
          <Link className="primary-button" href="/">Back to KindBudget</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
