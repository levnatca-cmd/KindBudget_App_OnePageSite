import type { Metadata } from "next";
import { HomePage } from "../home-page";

export const metadata: Metadata = {
  title: { absolute: "KindBudget — бюджет по-доброму" },
  description: "Учитывайте расходы, сканируйте чеки и ведите совместные бюджеты в одном простом и спокойном приложении для iPhone.",
  keywords: ["приложение для бюджета", "учёт расходов", "совместный бюджет", "сканирование чеков", "бюджет на iPhone"],
  alternates: {
    canonical: "/ru/",
    languages: { en: "/", ru: "/ru/", he: "/he/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_CA", "he_IL"],
    siteName: "KindBudget",
    title: "KindBudget — бюджет по-доброму",
    description: "Спокойный способ учитывать расходы, сканировать чеки и вести совместный бюджет.",
    url: "/ru/",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "KindBudget — бюджет по-доброму" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KindBudget — бюджет по-доброму",
    description: "Спокойный способ учитывать расходы, сканировать чеки и вести совместный бюджет.",
    images: ["/og.png"],
  },
};

export default function RussianHome() {
  return <HomePage locale="ru" />;
}
