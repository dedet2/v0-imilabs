import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://drdsuite.vercel.app"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/incluu", "/dr-dede", "/contact", "/resources"],
        disallow: ["/admin"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
