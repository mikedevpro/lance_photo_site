import Link from "next/link";
import Container from "@/components/layout/Container";
import { q } from "@/lib/wp";
import { wpText } from "@/lib/utils";

export const metadata = {
  title: "Services | Lance Larson Photography",
};
export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await q.services("orderby=menu_order&order=asc").catch(() => []);

  return (
    <section className="py-10">
      <Container>
        <h1 className="text-2xl font-semibold">Services</h1>
        <p className="mt-2 text-sm text-white/70">Explore packages and session offerings.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <h2 className="text-lg font-semibold">{wpText(service.title) || "Untitled Service"}</h2>
              <p className="mt-2 text-sm text-white/70">View details and availability.</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
