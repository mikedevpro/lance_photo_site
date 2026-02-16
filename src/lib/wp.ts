import { mockGalleries, mockServices } from "./mockData";
import type { WpGallery, WpService } from "./types";

const WP = process.env.NEXT_PUBLIC_WP_BASE_URL;

// Flip to false once WordPress is live
const USE_MOCK = true;

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${url}\n${text}`);
  }
  return res.json() as Promise<T>;
}

export const q = {
  galleries: async (params = ""): Promise<WpGallery[]> => {
    if (USE_MOCK) return mockGalleries;
    if (!WP) throw new Error("Missing NEXT_PUBLIC_WP_BASE_URL");
    return fetchJson<WpGallery[]>(
      `${WP}/wp-json/wp/v2/gallery?per_page=100&_embed${params ? `&${params}` : ""}`,
      {
      next: { revalidate: 300, tags: ["galleries"] },
      }
    );
  },

  galleryBySlug: async (slug: string): Promise<WpGallery[]> => {
    if (USE_MOCK) return mockGalleries.filter((g) => g.slug === slug);
    if (!WP) throw new Error("Missing NEXT_PUBLIC_WP_BASE_URL");
    return fetchJson<WpGallery[]>(`${WP}/wp-json/wp/v2/gallery?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 300, tags: ["galleries"] },
    });
  },

  services: async (params = ""): Promise<WpService[]> => {
    if (USE_MOCK) return mockServices;
    if (!WP) throw new Error("Missing NEXT_PUBLIC_WP_BASE_URL");
    return fetchJson<WpService[]>(
      `${WP}/wp-json/wp/v2/service?per_page=100&_embed${params ? `&${params}` : ""}`,
      {
        next: { revalidate: 300, tags: ["services"] },
      }
    );
  },

  serviceBySlug: async (slug: string): Promise<WpService[]> => {
    if (USE_MOCK) return mockServices.filter((s) => s.slug === slug);
    if (!WP) throw new Error("Missing NEXT_PUBLIC_WP_BASE_URL");
    return fetchJson<WpService[]>(`${WP}/wp-json/wp/v2/service?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 300, tags: ["services"] },
    });
  },
};
