import Container from "@/components/layout/Container";
import { q } from "@/lib/wp";
import { stripHtml, wpText } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const arr = await q.serviceBySlug(slug).catch(() => []);
  const service = arr?.[0];

  if (!service) {
    return (
      <Container>
        <div className="py-16">Service not found.</div>
      </Container>
    );
  }

  const title = wpText(service.title) || "Service";
  const body = stripHtml(wpText(service.content));

  return (
    <section className="py-10">
      <Container>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-white/80">
          {body || "Service details will be published soon."}
        </p>
      </Container>
    </section>
  );
}
