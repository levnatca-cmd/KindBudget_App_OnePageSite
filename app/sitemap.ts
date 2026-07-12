import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["/", "/privacy/", "/terms/", "/support/", "/delete-account/"] as const;
const locales = ["en", "ru", "he"] as const;

function localizedRoute(route: (typeof routes)[number], locale: (typeof locales)[number]) {
  if (locale === "en") return route;
  return route === "/" ? `/${locale}/` : `/${locale}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `https://kindbudget.ca${localizedRoute(route, locale)}`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.6,
      alternates: {
        languages: {
          en: `https://kindbudget.ca${localizedRoute(route, "en")}`,
          ru: `https://kindbudget.ca${localizedRoute(route, "ru")}`,
          he: `https://kindbudget.ca${localizedRoute(route, "he")}`,
          "x-default": `https://kindbudget.ca${localizedRoute(route, "en")}`,
        },
      },
    })),
  );
}
