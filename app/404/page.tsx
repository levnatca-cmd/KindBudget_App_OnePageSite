import type { Metadata } from "next";
import { NotFoundView } from "../not-found-view";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function ErrorPage() {
  return <NotFoundView />;
}
