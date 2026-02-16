import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,211,77,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

      <Container>
        <div className="relative py-12 md:py-16">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Services
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Choose your experience. Clear communication, professional direction, and a premium finish.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Check Availability
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ask a Question
            </Link>
          </div>

          {/* Category strip */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <Link
              href="/services/exotic-photography"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-sm font-semibold">Exotic</div>
              <div className="mt-1 text-sm text-white/70">Editorial sessions with bold lighting.</div>
            </Link>

            <Link
              href="/services/wedding-photography"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-sm font-semibold">Weddings</div>
              <div className="mt-1 text-sm text-white/70">Timeless storytelling and reliability.</div>
            </Link>

            <Link
              href="/services/event-photography"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-sm font-semibold">Events</div>
              <div className="mt-1 text-sm text-white/70">Professional coverage with fast delivery.</div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
