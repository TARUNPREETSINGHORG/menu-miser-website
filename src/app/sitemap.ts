import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://menumiser.co";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-09"),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-02-23"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-6`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq-s`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const blogPosts = [
    {
      url: `${baseUrl}/blog/how-to-save-money-on-groceries`,
      lastModified: new Date("2026-02-04"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-recipes-from-your-pantry`,
      lastModified: new Date("2026-02-09"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/real-cost-of-no-grocery-plan`,
      lastModified: new Date("2026-02-09"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-recipe-swap-meal-variety`,
      lastModified: new Date("2026-02-09"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...blogPosts];
}
