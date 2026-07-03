import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1 },
    { path: "/reservas", priority: 0.9 },
    { path: "/cardapio", priority: 0.9 },
    { path: "/eventos", priority: 0.8 },
    { path: "/unidades", priority: 0.8 },
    { path: "/sobre", priority: 0.7 },
    { path: "/galeria", priority: 0.6 },
    { path: "/contato", priority: 0.6 },
    { path: "/blog", priority: 0.6 },
  ];

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
