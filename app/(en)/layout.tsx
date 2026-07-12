import "../globals.css";
import { getRootMetadata } from "../site-metadata";

export const metadata = getRootMetadata("en");

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
