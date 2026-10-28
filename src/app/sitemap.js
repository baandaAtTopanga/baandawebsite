// src/app/sitemap.js
import { fetchAllBusinessRoutes } from "./mockDb";

export default async function sitemap() {
  const baseUrl = process.env.SITE_URL || "https://baanda.com";

  // 1. Fetch your dynamic list of 100,000+ businesses straight from the DB
  const rawBusinessRoutes = await fetchAllBusinessRoutes();

  // 2. Format static base landing routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 3. Map dynamic marketplace items into standard compliance layouts
  const dynamicBusinessRoutes = rawBusinessRoutes.map((business) => ({
    // This points crawlers to the specific Next.js subpages you build for SEO
    url: `${baseUrl}/bazaar/${business.slug}`,
    lastModified: business.updated,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Combine and deliver standard text payload directly to crawling servers
  return [...staticRoutes, ...dynamicBusinessRoutes];
}
