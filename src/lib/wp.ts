import type { WpGallery, WpService } from "@/lib/types";
import { mockGalleries, mockServices } from "./mockData";

const WP = process.env.NEXT_PUBLIC_WP_BASE_URL;

// Flip this to false when WP data is ready in this environment.
const USE_MOCK = true;

async function wpFetch<T>(path: string, tag: "galleries" | "services"): Promise<T> {
  if (!WP) throw new Error("Missing NEXT_PUBLIC_WP_BASE_URL");
  const res = await fetch(`${WP}${path}`, {
    next: { revalidate: 300, tags: [tag] },
  });

  if (!res.ok) throw new Error(`Failed to load ${tag}`);
  return res.json() as Promise<T>;
}

export const q = {
  galleries: async (params = ""): Promise<WpGallery[]> => {
    if (USE_MOCK) return mockGalleries;
    return wpFetch<WpGallery[]>(
      `/wp-json/wp/v2/gallery?per_page=100&_embed${params ? `&${params}` : ""}`,
      "galleries",
    );
  },

  galleryBySlug: async (slug: string): Promise<WpGallery[]> => {
    if (USE_MOCK) return mockGalleries.filter((g) => g.slug === slug);
    return wpFetch<WpGallery[]>(
      `/wp-json/wp/v2/gallery?slug=${encodeURIComponent(slug)}&_embed`,
      "galleries",
    );
  },

  services: async (params = ""): Promise<WpService[]> => {
    if (USE_MOCK) return mockServices;
    return wpFetch<WpService[]>(
      `/wp-json/wp/v2/service?per_page=100&_embed${params ? `&${params}` : ""}`,
      "services",
    );
  },

  serviceBySlug: async (slug: string): Promise<WpService[]> => {
    if (USE_MOCK) return mockServices.filter((s) => s.slug === slug);
    return wpFetch<WpService[]>(
      `/wp-json/wp/v2/service?slug=${encodeURIComponent(slug)}&_embed`,
      "services",
    );
  },
};
