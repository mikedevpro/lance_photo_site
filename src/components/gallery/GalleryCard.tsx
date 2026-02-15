import Image from "next/image";
import { featuredImageUrl, wpText, stripHtml } from "@/lib/utils";
import Link from "next/link";

export default function GalleryCard({ item }: { item: any }) {
  const img = featuredImageUrl(item);
  const title = wpText(item.title);
  const excerpt = stripHtml(wpText(item.excerpt));

  // fallback heights so masonry has variety (mock phase)
  const heights = [360, 460, 520, 420, 600];
  const h = heights[item.id % heights.length];

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="relative w-full">
        {img ? (
          <Image
            src={img}
            alt={title}
            width={1200}
            height={h}
            className="h-auto w-full object-cover group-hover:scale-[1.02] transition duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center text-white/40">
            No image
          </div>
        )}

        {/* subtle cinematic overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
      </div>

      <div className="p-4">
        <div className="text-base font-semibold">{title}</div>
        {excerpt ? (
          <div className="mt-1 text-sm text-white/70 line-clamp-2">{excerpt}</div>
        ) : null}
      </div>
    </Link>
  );
}

