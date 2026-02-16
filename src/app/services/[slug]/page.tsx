import Container from "@/components/layout/Container";
import RichText from "@/components/common/RichText";
import Link from "next/link";
import { q } from "@/lib/wp";
import { wpText } from "@/lib/utils";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const arr = await q.serviceBySlug(params.slug);
  const item = arr?.[0];
  const title = item ? wpText(item.title) : "Service";
  const desc = item?.acf?.starting_price_text
    ? `${title} — ${item.acf.starting_price_text}`
    : `${title} — Lance Larson Photography`;

  return {
    title: `${title} | Services`,
    description: desc,
  };
}

export default async function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const arr = await q.serviceBySlug(params.slug);
  const item = arr?.[0];

  if (!item) {
    return (
      <Container>
        <div className="py-16">Service not found.</div>
      </Container>
    );
  }

  const title = wpText(item.title);
  const type = item?.acf?.service_type;
  const price = item?.acf?.starting_price_text;
  const includes = item?.acf?.what_includes ?? [];
  const faq = item?.acf?.faq ?? [];
  const contentHtml = item?.content?.rendered ?? "";

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
              {type ?? "Service"}
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1>
            {price ? <p className="mt-2 text-sm text-white/70">{price}</p> : null}
          </div>

          <div className="flex gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Check Availability
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Back to Services
            </Link>
          </div>
        </div>

        {/* Main content */}
        {contentHtml ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <RichText html={contentHtml} />
          </div>
        ) : null}

        {/* What’s included */}
        {includes.length ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">What’s included</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {includes.map((x: any, idx: number) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">{x.item_title}</div>
                  <div className="mt-1 text-sm text-white/70">{x.item_detail}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* FAQ */}
        {faq.length ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <div className="mt-4 space-y-3">
              {faq.map((f: any, idx: number) => (
                <details
                  key={idx}
                  className="rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <summary className="cursor-pointer select-none font-semibold">
                    {f.question}
                  </summary>
                  <div className="mt-2 text-sm text-white/70">{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        ) : null}

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6">
          <div className="text-lg font-semibold">Ready to book?</div>
          <p className="mt-2 text-sm text-white/70">
            Tell me what you’re planning and I’ll help you lock in a date and pick the right package.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
