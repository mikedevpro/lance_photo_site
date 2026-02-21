"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "./Lightbox";
import { featuredImageUrl, wpText } from "@/lib/utils";
import type { WpGallery, WpGalleryImage } from "@/lib/types";

function toLightboxImage(
  img: WpGalleryImage,
  title: string,
  details: LightboxImage["details"]
): LightboxImage | null {
  if (typeof img === "string") {
    return img ? { src: img, alt: "", caption: title, details } : null;
  }

  const src = img?.url || img?.source_url || "";
  if (!src) return null;

  return {
    src,
    alt: img?.alt || "",
    caption: title,
    details,
  } as LightboxImage;
}

export default function GalleryCard({ item }: { item: WpGallery }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const title = wpText(item.title);
  const cover = featuredImageUrl(item);
  const asString = (v: unknown) => (typeof v === "string" ? v : undefined);

  const details = useMemo(
    () => ({
      category: asString(item?.acf?.gallery_type),
      location: asString(item?.acf?.location),
      date: asString(item?.acf?.shoot_date),
      description: asString(item?.acf?.short_description),
    }),
    [item]
  );

  // Build a list of images for the lightbox:
  // - Prefer ACF gallery images
  // - Fallback to featured image
  const images: LightboxImage[] = useMemo(() => {
    const acfImgs = Array.isArray(item?.acf?.gallery_images) ? item.acf.gallery_images : [];

    const mapped = acfImgs
      .map((img) => toLightboxImage(img, title, details))
      .filter(Boolean) as LightboxImage[];

    if (mapped.length) return mapped;

    if (cover) return [{ src: cover, alt: title, caption: title, details }];

    return [];
  }, [item, cover, title, details]);

  // temporary height variance (works great in masonry)
  const heights = [380, 460, 520, 420, 600];
  const h = heights[item.id % heights.length];

  const openAt = (startIndex: number) => {
    setIdx(startIndex);
    setOpen(true);
  };

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <>
      <button
        onClick={() => openAt(0)}
        className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
        type="button"
      >
        <div className="relative w-full">
          {cover ? (
            <Image
              src={cover}
              alt={title}
              width={1200}
              height={h}
              className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="h-64 w-full bg-white/10" />
          )}

          {/* Cinematic hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Hover caption */}
          <div className="absolute bottom-0 left-0 w-full translate-y-6 px-5 pb-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="text-lg font-semibold text-white tracking-tight">{title}</div>
            {images.length > 1 ? (
              <div className="mt-1 text-xs text-white/70">{images.length} photos</div>
            ) : null}
          </div>
        </div>
      </button>

      {open && images.length ? (
        <Lightbox
          images={images}
          index={idx}
          onClose={() => setOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
    </>
  );
}
