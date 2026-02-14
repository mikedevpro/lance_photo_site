"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  return "All";
}

export default function PortfolioClient({ items }: { items: WpGallery[] }) {
  const options = ["All", "Exotic", "Weddings", "Events"];
  const search = useSearchParams();
  const [manualFilter, setManualFilter] = useState<string | null>(null);
  const filter = manualFilter ?? toLabel(search.get("type") ?? "");

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    const f = normalizeType(filter);
    return items.filter((it) => normalizeType(String(it?.acf?.gallery_type ?? "")) === f);
  }, [items, filter]);

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-2 text-sm text-white/70">
          Explore recent sessions and featured work.
        </p>

        <FilterTabs value={filter} onChange={(v) => setManualFilter(v)} options={options} />

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
