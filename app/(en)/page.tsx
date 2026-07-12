import type { Metadata } from "next";
import { HomePage } from "../home-page";

export const metadata: Metadata = {
  title: { absolute: "KindBudget — Budgeting that feels kind" },
  description: "Track spending, scan receipts and manage shared budgets in one calm, simple iPhone app.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/ru/",
      he: "/he/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: ["ru_RU", "he_IL"],
    siteName: "KindBudget",
    title: "KindBudget — Budgeting that feels kind",
    description: "A calmer way to track spending, scan receipts and manage a shared budget.",
    url: "/",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "KindBudget — Budgeting that feels kind" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KindBudget — Budgeting that feels kind",
    description: "A calmer way to track spending, scan receipts and manage a shared budget.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
