import type { WpGallery } from "@/lib/types";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function FeaturedGalleries({ items }: { items: WpGallery[] }) {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="text-xl font-semibold">Featured Work</h2>
        <p className="mt-2 text-sm text-white/70">
          A curated selection of recent sessions-crafted with intention, lighting, and story.
        </p>
      </div>

      <div className="mt-6">
        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
