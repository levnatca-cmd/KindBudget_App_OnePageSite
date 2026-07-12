import "../globals.css";
import { getRootMetadata } from "../site-metadata";

export const metadata = getRootMetadata("ru");

export default function RussianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="locale-root locale-root--ru" lang="ru" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
