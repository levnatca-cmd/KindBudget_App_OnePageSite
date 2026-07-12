import type { Metadata } from "next";
import "./globals.css";
import { NotFoundView } from "./not-found-view";

export const metadata: Metadata = {
  title: "Page not found · KindBudget",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NotFoundView />
      </body>
    </html>
  );
}
