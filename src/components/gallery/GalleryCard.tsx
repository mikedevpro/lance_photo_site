import Link from "next/link";
import Image from "next/image";
import type { WpGallery } from "@/lib/types";
import { featuredImageUrl, wpText, stripHtml } from "@/lib/utils";

export default function GalleryCard({ item }: { item: WpGallery }) {
  const img = featuredImageUrl(item);
  const title = wpText(item.title);
  const excerpt = stripHtml(wpText(item.excerpt));

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
    >
      <div className="relative aspect-[4/3] w-full">
        {img ? (
          <>
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/40">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="font-semibold text-lg">{title}</div>
        {excerpt ? <div className="mt-1 line-clamp-2 text-sm text-white/70">{excerpt}</div> : null}
      </div>
    </Link>
  );
}
