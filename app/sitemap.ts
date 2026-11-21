import type { MetadataRoute } from "next";
import { courses, blogs } from "@/lib/data";

const base = "https://mhdrivingschool.com"; // TODO: set the real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/courses",
    "/enroll",
    "/gallery",
    "/blogs",
    "/branches",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ].map((r) => ({ url: `${base}${r}`, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.8 }));

  return [
    ...routes,
    ...courses.map((c) => ({ url: `${base}/courses/${c.slug}`, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...blogs.map((b) => ({ url: `${base}/blogs/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
