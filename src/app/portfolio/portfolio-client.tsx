"use client";

import { useMemo, useState } from "react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import FilterTabs from "@/components/gallery/FilterTabs";
import type { WpGallery } from "@/lib/types";

function normalizeType(v: string) {
  return (v || "").trim().toLowerCase();
}

function toLabel(v: string) {
  const n = normalizeType(v);
  if (n === "exotic") return "Exotic";
  if (n === "weddings" || n === "wedding") return "Weddings";
  if (n === "events" || n === "event") return "Events";
  if (n === "all") return "All";
  return "Featured";
}

export default function PortfolioClient({ items }: { items: WpGallery[] }) {
  const options = ["Featured", "All", "Exotic", "Weddings", "Events"];
  const [filter, setFilter] = useState<string>("Featured");

  const filtered = useMemo(() => {
    if (filter === "All") return items;

    if (filter === "Featured") {
      return items.filter((it) => Boolean(it?.acf?.is_featured));
    }

    const f = normalizeType(filter);
    return items.filter((it) => normalizeType((it?.acf?.gallery_type as string) ?? "") === f);
  }, [items, filter]);


  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-2 text-sm text-white/70">
          Explore recent sessions and featured work.
        </p>

        <FilterTabs value={filter} onChange={(v) => setFilter(toLabel(v))} options={options} />
        {filter === "Featured" ? (
          <div className="mt-2 text-sm text-white/60">
            Curated highlights — the best work to start with.
          </div>
        ) : null}

        <div className="mt-3 text-sm text-white/60">
          Showing <span className="font-semibold text-white">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "gallery" : "galleries"}
        </div>
      </div>

      <div className="mt-8">
        <GalleryGrid items={filtered} />
      </div>
    </section>
  );
}
