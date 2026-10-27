import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  return [
    {
      url: baseUrl,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
