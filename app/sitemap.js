import { pages } from "@/lib/pages-data"

export default function sitemap() {
  const baseUrl = "https://assistente-de-apoio.vercel.app"

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
  ]

  const dynamicPages = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.slug === "ansiedade" ? 0.9 : 0.7,
  }))

  return [...staticPages, ...dynamicPages]
}
