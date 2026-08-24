import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.creativeworksaz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = SERVICES.map((s) => ({
    url: `${base}${s.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/behavioral-health`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/schedule-consultation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...serviceRoutes,
  ];
}
