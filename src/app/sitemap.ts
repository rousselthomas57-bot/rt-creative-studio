import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rt-creativestudio.fr";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/a-propos`, lastModified: new Date() },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date() },
    { url: `${baseUrl}/cgv`, lastModified: new Date() },
  ];
}
