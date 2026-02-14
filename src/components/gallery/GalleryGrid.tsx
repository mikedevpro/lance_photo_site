import type { WpGallery } from "@/lib/types";
import Container from "@/components/layout/Container";
import GalleryCard from "./GalleryCard";

export default function GalleryGrid({ items }: { items: WpGallery[] }) {
  return (
    <Container>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <GalleryCard key={it.id} item={it} />
        ))}
      </div>
    </Container>
  );
}
