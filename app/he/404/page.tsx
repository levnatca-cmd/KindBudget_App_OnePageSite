import type { Metadata } from "next";
import { NotFoundView } from "../../not-found-view";

const title = "העמוד לא נמצא";
const description = "העמוד של KindBudget לא נמצא או הועבר.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/he/404/",
    languages: {
      en: "/404/",
      ru: "/ru/404/",
      he: "/he/404/",
      "x-default": "/404/",
    },
  },
  openGraph: { title, description, locale: "he_IL", url: "/he/404/" },
  twitter: { title, description },
};

export default function HebrewErrorPage() {
  return <NotFoundView locale="he" currentPath="/404" />;
}
