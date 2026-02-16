import CinematicHero from "@/components/home/CinematicHero";
import CategoryCards from "@/components/home/CategoryCards";
import FeaturedGalleries from "@/components/home/FeaturedGalleries";
import BookingCTA from "@/components/home/BookingCTA";
import { q } from "@/lib/wp";

export default async function HomePage() {
  const galleries = await q.galleries();

  // Featured bucket (falls back to newest if none)
  const featured = galleries.filter((g) => Boolean(g?.acf?.is_featured));
  const heroPicks = featured.length ? featured : galleries.slice(0, 6);

  return (
    <>
      <CinematicHero featured={heroPicks} />
      <CategoryCards />
      <FeaturedGalleries items={(featured.length ? featured : galleries).slice(0, 8)} />
      <BookingCTA />
    </>
  );
}
