export type WpRenderedText =
  | string
  | {
      rendered?: string | null;
    }
  | null
  | undefined;

export interface WpMedia {
  source_url?: string | null;
  alt_text?: string | null;
}

export interface WpEmbedded {
  "wp:featuredmedia"?: WpMedia[];
}

export type WpGalleryImage =
  | string
  | {
      url?: string | null;
      source_url?: string | null;
      alt?: string | null;
      alt_text?: string | null;
    };

export interface WpBaseEntity {
  id: number;
  slug: string;
  title?: WpRenderedText;
  excerpt?: WpRenderedText;
  _embedded?: WpEmbedded;
  acf?: Record<string, unknown> | null;
}

export interface WpGallery extends WpBaseEntity {
  acf?:
    | (Record<string, unknown> & {
        gallery_images?: WpGalleryImage[];
      })
    | null;
}

export interface WpService extends WpBaseEntity {
  content?: WpRenderedText;
}
