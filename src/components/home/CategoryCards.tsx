import Link from "next/link";
import Container from "@/components/layout/Container";

const cards = [
  { title: "Exotic Photography", desc: "Artistic, expressive sessions tailored to your vision.", href: "/portfolio?type=exotic" },
  { title: "Weddings", desc: "Story-driven coverage for one of life’s biggest days.", href: "/portfolio?type=weddings" },
  { title: "Events", desc: "Professional coverage for private and corporate events.", href: "/portfolio?type=events" },
];

export default function CategoryCards() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-xl font-semibold">Choose Your Experience</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="text-base font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-white/70">{c.desc}</div>
              <div className="mt-4 text-sm font-semibold text-white">Explore →</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
