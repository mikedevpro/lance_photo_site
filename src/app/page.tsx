import Hero from "@/components/home/Hero";
import CategoryCards from "@/components/home/CategoryCards";
import FeaturedGalleries from "@/components/home/FeaturedGalleries";
import BookingCTA from "@/components/home/BookingCTA";
import { q } from "@/lib/wp";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const galleries = await q.galleries("orderby=date&order=desc").catch(() => []);
  // “featured” filtering depends on how you expose ACF.
  // For now: just take the newest 6. Later we’ll filter by acf.is_featured.
  const featured = galleries.slice(0, 6);

  return (
    <>
      <Hero />
      <CategoryCards />
      <FeaturedGalleries items={featured} />
      <BookingCTA />
    </>
  );
}
