import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["/", "/privacy/", "/terms/", "/support/", "/delete-account/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://kindbudget.ca${route}`,
    lastModified: new Date("2026-07-12"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
