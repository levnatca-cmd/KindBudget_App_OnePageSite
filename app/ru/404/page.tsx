import type { Metadata } from "next";
import { NotFoundView } from "../../not-found-view";

const title = "Страница не найдена";
const description = "Страница KindBudget не найдена или была перемещена.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/ru/404/",
    languages: {
      en: "/404/",
      ru: "/ru/404/",
      he: "/he/404/",
      "x-default": "/404/",
    },
  },
  openGraph: { title, description, locale: "ru_RU", url: "/ru/404/" },
  twitter: { title, description },
};

export default function RussianErrorPage() {
  return <NotFoundView locale="ru" currentPath="/404" />;
}
