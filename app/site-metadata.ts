import type { Metadata } from "next";
import type { Locale } from "./i18n";

const localeMetadata = {
  en: {
    canonical: "/",
    title: "KindBudget — Budgeting that feels kind",
    description: "Track spending, scan receipts and manage shared budgets in one calm, simple iPhone app.",
    socialDescription: "A calmer way to track spending, scan receipts and manage a shared budget.",
    openGraphLocale: "en_CA",
  },
  ru: {
    canonical: "/ru/",
    title: "KindBudget — Бюджет без лишнего стресса",
    description: "Учитывайте расходы, сканируйте чеки и ведите совместный бюджет в одном простом приложении для iPhone.",
    socialDescription: "Спокойный способ учитывать расходы, сканировать чеки и планировать бюджет вместе.",
    openGraphLocale: "ru_RU",
  },
  he: {
    canonical: "/he/",
    title: "KindBudget — ניהול תקציב בגישה נעימה",
    description: "עוקבים אחר הוצאות, סורקים קבלות ומנהלים תקציבים משותפים באפליקציה אחת פשוטה ורגועה ל-iPhone.",
    socialDescription: "דרך רגועה יותר לעקוב אחר הוצאות, לסרוק קבלות ולנהל תקציב משותף.",
    openGraphLocale: "he_IL",
  },
} as const;

export function getRootMetadata(locale: Locale): Metadata {
  const copy = localeMetadata[locale];

  return {
    metadataBase: new URL("https://kindbudget.ca"),
    title: {
      default: copy.title,
      template: "%s · KindBudget",
    },
    description: copy.description,
    alternates: {
      canonical: copy.canonical,
    },
    applicationName: "KindBudget",
    keywords: ["budget app", "expense tracker", "shared budget", "receipt scanner", "iPhone budget"],
    icons: {
      icon: "/brand/app-icon.png",
      apple: "/brand/app-icon.png",
    },
    openGraph: {
      type: "website",
      locale: copy.openGraphLocale,
      siteName: "KindBudget",
      title: copy.title,
      description: copy.socialDescription,
      images: [
        {
          url: "/og.png",
          width: 1734,
          height: 907,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.socialDescription,
      images: ["/og.png"],
    },
  };
}
