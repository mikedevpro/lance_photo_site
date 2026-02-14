import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
      <Container>
        <div className="py-16 md:py-24">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Lance Larson Photography
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Exotic • Weddings • Events — bold, timeless photography in Phoenix, AZ and surrounding areas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Check Availability
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
