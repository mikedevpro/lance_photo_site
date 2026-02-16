import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { featuredImageUrl, wpText } from "@/lib/utils";
import type { WpGallery } from "@/lib/types";

export default function CinematicHero({ featured }: { featured: WpGallery[] }) {
  // pick 1–3 hero images from featured galleries
  const picks = (featured ?? []).slice(0, 3).map((g) => ({
    src: featuredImageUrl(g),
    title: wpText(g?.title),
  })).filter((x) => Boolean(x.src));

  const hero = picks[0];

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background image */}
      {hero?.src ? (
        <div className="absolute inset-0">
          <Image
            src={hero.src}
            alt={hero.title || "Featured work"}
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-zinc-950" />
      )}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      {/* Film grain (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <Container>
        <div className="relative py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Phoenix, AZ • Exotic • Weddings • Events
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Lance Larson Photography
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
            Bold, timeless imagery with confident direction and a premium finish.
            Book your date or explore curated work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-95 transition"
            >
              Check Availability
            </Link>
            <Link
              href="/portfolio?type=featured"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Featured Work
            </Link>
          </div>

          {/* Optional: tiny “currently featured” label */}
          {hero?.title ? (
            <div className="mt-8 text-xs text-white/55">
              Featured: <span className="text-white/75 font-semibold">{hero.title}</span>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
