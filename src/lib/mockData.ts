export const mockGalleries = [
  {
    id: 1,
    slug: "desert-wedding-sunset",
    title: { rendered: "Desert Wedding — Sunset" },
    excerpt: { rendered: "A golden-hour wedding story with timeless edits." },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?w=1600&q=80" },
      ],
    },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      gallery_images: [
        { url: "https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?w=1600&q=80", alt: "Wedding 1" },
        { url: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=1600&q=80", alt: "Wedding 2" },
        { url: "https://images.unsplash.com/photo-1529634897861-1a49e3c3b7b5?w=1600&q=80", alt: "Wedding 3" },
      ],
    },
  },
  {
    id: 2,
    slug: "editorial-exotic-studio",
    title: { rendered: "Editorial Exotic — Studio" },
    excerpt: { rendered: "Bold lighting and confident direction, premium finish." },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80" },
      ],
    },
    acf: {
      gallery_type: "Exotic",
      is_featured: true,
      gallery_images: [
        { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80", alt: "Exotic 1" },
        { url: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1600&q=80", alt: "Exotic 2" },
      ],
    },
  },
  {
    id: 3,
    slug: "small-event-nightlife",
    title: { rendered: "Small Event — Nightlife" },
    excerpt: { rendered: "Clean coverage with dramatic atmosphere and detail shots." },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://images.unsplash.com/photo-1515165562835-c4c1b8c0f0b9?w=1600&q=80" },
      ],
    },
    acf: {
      gallery_type: "Events",
      is_featured: false,
      gallery_images: [
        { url: "https://images.unsplash.com/photo-1515165562835-c4c1b8c0f0b9?w=1600&q=80", alt: "Event 1" },
      ],
    },
  },
];

export const mockServices = [
  {
    id: 101,
    slug: "wedding-photography",
    title: { rendered: "Wedding Photography" },
    content: {
      rendered:
        "Full-day storytelling coverage, timeline support, and a polished online gallery for sharing and downloads.",
    },
    excerpt: { rendered: "Story-driven wedding coverage with timeless edits." },
  },
  {
    id: 102,
    slug: "event-photography",
    title: { rendered: "Event Photography" },
    content: {
      rendered:
        "Professional coverage for private and corporate events with fast turnaround and highlight-ready selections.",
    },
    excerpt: { rendered: "Professional event coverage with fast delivery." },
  },
  {
    id: 103,
    slug: "editorial-exotic-session",
    title: { rendered: "Editorial Exotic Session" },
    content: {
      rendered:
        "Creative direction, lighting design, and premium retouching built for bold and intentional final images.",
    },
    excerpt: { rendered: "Directed sessions with premium editorial finish." },
  },
];
