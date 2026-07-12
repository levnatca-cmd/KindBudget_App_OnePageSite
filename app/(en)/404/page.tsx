import type { Metadata } from "next";
import { NotFoundView } from "../../not-found-view";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/404/",
    languages: {
      en: "/404/",
      ru: "/ru/404/",
      he: "/he/404/",
      "x-default": "/404/",
    },
  },
};

export default function ErrorPage() {
  return <NotFoundView currentPath="/404" />;
}
