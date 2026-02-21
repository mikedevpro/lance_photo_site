"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import type { WpGallery } from "@/lib/types";
import { featuredImageUrl, wpText } from "@/lib/utils";

export default function CinematicHero({ featured }: { featured: WpGallery[] }) {
  type Slide = { src: string; title: string };
  const slides = (featured ?? [])
    .slice(0, 3)
    .map((g) => ({
      src: featuredImageUrl(g),
      title: wpText(g?.title),
    }))
    .filter((x): x is Slide => Boolean(x.src));

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden border-b border-white/10">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={i}
            src={s.src}
            alt={s.title || "Featured work"}
            fill
            priority={i === 0}
            className={[
              "object-cover transition-opacity duration-1000",
              i === index ? "opacity-70" : "opacity-0",
            ].join(" ")}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex h-[70vh] min-h-[520px] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Photography Portfolio
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Lance Larson
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              A curated photography portfolio featuring exotic, wedding, and event work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio?type=featured"
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
              >
                View Portfolio
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>

            {slides[index]?.title ? (
              <div className="mt-8 text-xs text-white/55">
                Featured:{" "}
                <span className="font-semibold text-white/75">
                  {slides[index].title}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
