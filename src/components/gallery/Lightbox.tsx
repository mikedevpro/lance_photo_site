"use client";

import { useEffect } from "react";
import Image from "next/image";

export type LightboxImage = {
  src: string;
  alt?: string;
  caption?: string;
  details?: {
    category?: string;
    location?: string;
    date?: string;
    description?: string;
  };
};

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const current = images[index];

  useEffect(() => {
    // Lock body scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-4">
        <div className="text-xs text-white/70">
          {index + 1} / {images.length}
          {current.caption ? (
            <span className="ml-2 text-white/85 font-semibold">{current.caption}</span>
          ) : null}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10"
          type="button"
        >
          ✕ Close
        </button>
      </div>

      {/* Prev/Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
        aria-label="Previous image"
        type="button"
      >
        ←
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
        aria-label="Next image"
        type="button"
      >
        →
      </button>

      {/* Image */}
      <div
        className="flex h-full w-full items-center justify-center px-6 py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[86vh] w-full max-w-6xl">
          <Image
            src={current.src}
            alt={current.alt || ""}
            width={1800}
            height={1200}
            priority
            className="h-auto w-full object-contain"
          />

          {/* Caption + Details */}
          <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
            <div className="text-center md:text-left">
              {current.caption || current.alt ? (
                <div className="text-sm text-white/80">
                  <span className="font-semibold text-white">{current.caption || current.alt}</span>
                </div>
              ) : null}

              {current.details?.description ? (
                <div className="mt-1 text-sm text-white/60">
                  {current.details.description}
                </div>
              ) : null}
            </div>

            {/* Details panel */}
            {current.details?.category || current.details?.location || current.details?.date ? (
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/75">
                <div className="font-semibold text-white/85 mb-2">Details</div>

                <div className="space-y-1">
                  {current.details?.category ? (
                    <div className="flex justify-between gap-6">
                      <span className="text-white/55">Category</span>
                      <span className="font-semibold text-white/85">{current.details.category}</span>
                    </div>
                  ) : null}

                  {current.details?.location ? (
                    <div className="flex justify-between gap-6">
                      <span className="text-white/55">Location</span>
                      <span className="font-semibold text-white/85">{current.details.location}</span>
                    </div>
                  ) : null}

                  {current.details?.date ? (
                    <div className="flex justify-between gap-6">
                      <span className="text-white/55">Date</span>
                      <span className="font-semibold text-white/85">{current.details.date}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
