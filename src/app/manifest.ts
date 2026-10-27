import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.fullName} — ${site.role}`,
    short_name: `${site.name}.dev`,
    description: site.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a08",
    theme_color: "#0c0a08",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/portfolio-logo.jpg",
        sizes: "516x516",
        type: "image/jpeg",
      },
    ],
  };
}
