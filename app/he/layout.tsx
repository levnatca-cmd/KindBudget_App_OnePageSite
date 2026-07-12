import "../globals.css";
import { getRootMetadata } from "../site-metadata";

export const metadata = getRootMetadata("he");

export default function HebrewLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="locale-root locale-root--he" lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
