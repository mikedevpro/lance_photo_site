import Image from "next/image";
import Link from "next/link";
import { featuredImageUrl, wpText } from "@/lib/utils";
import type { WpGallery } from "@/lib/types";

export default function GalleryCard({ item }: { item: WpGallery }) {
  const img = featuredImageUrl(item);
  const title = wpText(item.title);

  // temporary height variance (remove once WP has real mixed ratios)
  const heights = [380, 460, 520, 420, 600];
  const h = heights[item.id % heights.length];

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:shadow-2xl hover:shadow-black/40 transition duration-500"
    >
      {/* Image */}
      <div className="relative w-full">
        {img ? (
          <Image
            src={img}
            alt={title}
            width={1200}
            height={h}
            className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="h-64 w-full bg-white/10" />
        )}

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Hover caption */}
        <div className="absolute bottom-0 left-0 w-full translate-y-6 px-5 pb-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-lg font-semibold text-white tracking-tight">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
