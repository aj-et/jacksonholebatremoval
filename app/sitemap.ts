import { MetadataRoute } from "next"
import cities from "@/const/cities.json"

export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const baseUrl = "https://www.jacksonholebatremoval.com"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticPages, ...cityPages]
}
