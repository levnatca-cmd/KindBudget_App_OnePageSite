import type { Metadata } from "next";
import { NotFoundView } from "../not-found-view";

export const metadata: Metadata = { title: "Page not found" };

export default function ErrorPage() {
  return <NotFoundView />;
}
