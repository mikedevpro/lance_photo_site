export default function RichText({ html }: { html: string }) {
  // WP content is HTML. For now, we trust our own mock/WP.
  // Later we can sanitize if needed.
  return (
    <div
      className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-strong:text-white"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
