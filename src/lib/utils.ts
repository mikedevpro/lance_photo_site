import type { WpEmbedded, WpRenderedText } from "@/lib/types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "").trim();
}

export function wpText(node: WpRenderedText): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  return typeof node.rendered === "string" ? node.rendered : "";
}

export function featuredImageUrl(item: { _embedded?: WpEmbedded } | null | undefined): string | null {
  if (!item || !isRecord(item)) return null;
  const media = item._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url ?? null;
}
