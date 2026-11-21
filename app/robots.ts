import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mhdrivingschool.com/sitemap.xml", // TODO: set the real domain
  };
}
