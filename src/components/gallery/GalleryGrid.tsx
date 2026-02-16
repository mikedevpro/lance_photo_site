import Container from "@/components/layout/Container";
import GalleryCard from "./GalleryCard";
import FadeIn from "@/components/common/FadeIn";
import type { WpGallery } from "@/lib/types";

export default function GalleryGrid({ items }: { items: WpGallery[] }) {
  return (
    <Container>
      {/* Masonry via CSS columns */}
      <div className="columns-1 gap-4 md:columns-2 2xl:columns-4">
        {items.map((it, idx) => (
          <div key={it.id} className="mb-4 break-inside-avoid">
            <FadeIn delayMs={(idx % 8) * 40}>
              <GalleryCard item={it} />
            </FadeIn>
          </div>
        ))}
      </div>
    </Container>
  );
}
