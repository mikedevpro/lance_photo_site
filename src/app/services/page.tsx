import ServicesHero from "@/components/services/ServicesHero";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/services/ServiceCard";
import { q } from "@/lib/wp";

export const metadata = {
  title: "Services | Lance Larson Photography",
  description: "Exotic • Weddings • Events — explore services and booking options.",
};

export default async function ServicesPage() {
  const services = await q.services();

  return (
    <section className="pb-10">
      <ServicesHero />

      <div className="pt-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.id} item={s} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold">Not sure what to choose?</div>
            <p className="mt-2 text-sm text-white/70">
              Book a quick consult and I’ll help you pick the right session and lock in a date.
            </p>
            <a
              href="/booking"
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Check Availability
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
