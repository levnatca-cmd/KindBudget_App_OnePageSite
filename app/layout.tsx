import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindbudget.app"),
  title: {
    default: "KindBudget — Budgeting that feels kind",
    template: "%s · KindBudget",
  },
  description:
    "Track spending, scan receipts and manage shared budgets in one calm, simple iPhone app.",
  applicationName: "KindBudget",
  keywords: ["budget app", "expense tracker", "shared budget", "receipt scanner", "iPhone budget"],
  icons: {
    icon: "/brand/app-icon.png",
    apple: "/brand/app-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "KindBudget",
    title: "KindBudget — Budgeting that feels kind",
    description: "A calmer way to track spending, scan receipts and budget together.",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "KindBudget — Budgeting that feels kind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KindBudget — Budgeting that feels kind",
    description: "A calmer way to track spending, scan receipts and budget together.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
