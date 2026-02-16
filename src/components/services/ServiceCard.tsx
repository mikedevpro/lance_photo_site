import Link from "next/link";
import { wpText, stripHtml } from "@/lib/utils";
// import type { WpService } from "@/lib/types";

export default function ServiceCard({ item }: { item: any}) {
const asString = (v: unknown) => (typeof v === "string" ? v : undefined)

  const title = wpText(item.title);
  const excerpt = stripHtml(wpText(item.excerpt));
  const price = asString(item?.acf?.starting_price_text);
  const serviceType = asString(item?.acf?.service_type) ?? "Service";


  return (
    <Link
      href={`/services/${item.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold tracking-tight">{title}</div>
          {excerpt ? <div className="mt-2 text-sm text-white/70">{excerpt}</div>
          : null}
        </div>

        <div className="shrink-0 rounded-xl border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/80">
          {serviceType}
        </div>
      </div>

      {price ? (
        <div className="mt-4 text-sm text-white/70">
          <span className="text-white/85 font-semibold">Pricing:</span> {price}
        </div>
      ) : null}

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
        View details
        <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
