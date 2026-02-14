import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { q } from "@/lib/wp";
import type { WpGalleryImage } from "@/lib/types";
import { featuredImageUrl, wpText } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function GalleryDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const arr = await q.galleryBySlug(slug).catch(() => []);
  const item = arr?.[0];

  if (!item) {
    return (
      <Container>
        <div className="py-16">Gallery not found.</div>
      </Container>
    );
  }

  const title = wpText(item.title);
  const hero = featuredImageUrl(item);
  const images: WpGalleryImage[] = item?.acf?.gallery_images ?? [];

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="mt-2 text-sm text-white/70">Curated gallery.</p>
          </div>
          <Link href="/booking" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black">
            Book a Session
          </Link>
        </div>

        {hero ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image src={hero} alt={title} fill className="object-cover" sizes="100vw" priority />
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => {
            const url = typeof img === "string" ? img : (img.url ?? img.source_url ?? null);
            const alt = typeof img === "string" ? `${title} ${idx + 1}` : (img.alt ?? img.alt_text ?? `${title} ${idx + 1}`);
            if (!url) return null;

            return (
              <div key={`${url}-${idx}`} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <Image src={url} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
