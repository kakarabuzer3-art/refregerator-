import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/products";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/collections",
  "/products",
  "/technology",
  "/design",
  "/support",
  "/dealers",
  "/compare",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const collectionPages = collections.map((collection) => ({
    url: `${site.url}/collections/${collection.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...collectionPages, ...productPages];
}
