import Container from "@/components/layout/Container";
import GalleryCard from "./GalleryCard";

export default function GalleryGrid({ items }: { items: any[] }) {
  return (
    <Container>
      {/* Masonry via CSS columns */}
      <div className="columns-1 gap-4 md:columns-2 2xl:columns-4">
        {items.map((it) => (
          <div key={it.id} className="mb-4 break-inside-avoid">
            <GalleryCard item={it} />
          </div>
        ))}
      </div>
    </Container>
  );
}

