import type { Metadata } from "next";
import { HomePage } from "../home-page";

export const metadata: Metadata = {
  title: { absolute: "KindBudget — ניהול תקציב בגישה נעימה" },
  description: "עוקבים אחר הוצאות, סורקים קבלות ומנהלים תקציבים משותפים — באפליקציה אחת פשוטה ורגועה ל-iPhone.",
  keywords: ["אפליקציה לניהול תקציב", "מעקב הוצאות", "תקציב משותף", "סריקת קבלות", "תקציב ל-iPhone"],
  alternates: {
    canonical: "/he/",
    languages: { en: "/", ru: "/ru/", he: "/he/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    alternateLocale: ["en_CA", "ru_RU"],
    siteName: "KindBudget",
    title: "KindBudget — ניהול תקציב בגישה נעימה",
    description: "דרך רגועה יותר לעקוב אחר הוצאות, לסרוק קבלות ולנהל תקציב משותף.",
    url: "/he/",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "KindBudget — ניהול תקציב בגישה נעימה" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KindBudget — ניהול תקציב בגישה נעימה",
    description: "דרך רגועה יותר לעקוב אחר הוצאות, לסרוק קבלות ולנהל תקציב משותף.",
    images: ["/og.png"],
  },
};

export default function HebrewHome() {
  return <HomePage locale="he" />;
}
