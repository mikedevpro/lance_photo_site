const u = (id: number) =>
  `https://images.unsplash.com/photo-${id}?w=1600&q=80&auto=format&fit=crop`;

export const mockGalleries = [
  // --- WEDDINGS ---
  {
    id: 1,
    slug: "desert-wedding-sunset",
    title: { rendered: "Desert Wedding — Sunset" },
    excerpt: { rendered: "Golden hour ceremony in the Arizona desert." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1523437237164) }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      gallery_images: [{ url: u(1523437237164) }],
    },
  },
  {
    id: 2,
    slug: "mountain-wedding-elegance",
    title: { rendered: "Mountain Wedding — Elegance" },
    excerpt: { rendered: "Soft light, dramatic landscape backdrop." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1520857014576) }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: false,
      gallery_images: [{ url: u(1520857014576) }],
    },
  },
  {
    id: 3,
    slug: "intimate-indoor-ceremony",
    title: { rendered: "Intimate Indoor Ceremony" },
    excerpt: { rendered: "Classic tones and emotional storytelling." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1529634897861) }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      gallery_images: [{ url: u(1529634897861) }],
    },
  },

  // --- EXOTIC ---
  {
    id: 4,
    slug: "editorial-exotic-studio",
    title: { rendered: "Editorial Exotic — Studio" },
    excerpt: { rendered: "Bold lighting with confident direction." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1524504388940) }] },
    acf: {
      gallery_type: "Exotic",
      is_featured: true,
      gallery_images: [{ url: u(1524504388940) }],
    },
  },
  {
    id: 5,
    slug: "dramatic-shadow-session",
    title: { rendered: "Dramatic Shadow Session" },
    excerpt: { rendered: "High contrast editorial mood." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1524253482453) }] },
    acf: {
      gallery_type: "Exotic",
      is_featured: false,
      gallery_images: [{ url: u(1524253482453) }],
    },
  },
  {
    id: 6,
    slug: "luxury-boudoir-light",
    title: { rendered: "Luxury Boudoir Light" },
    excerpt: { rendered: "Elegant tones with soft natural light." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1517841905240) }] },
    acf: {
      gallery_type: "Exotic",
      is_featured: true,
      gallery_images: [{ url: u(1517841905240) }],
    },
  },

  // --- EVENTS ---
  {
    id: 7,
    slug: "corporate-gala-night",
    title: { rendered: "Corporate Gala Night" },
    excerpt: { rendered: "Professional coverage with atmosphere." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1515165562835) }] },
    acf: {
      gallery_type: "Events",
      is_featured: true,
      gallery_images: [{ url: u(1515165562835) }],
    },
  },
  {
    id: 8,
    slug: "private-birthday-event",
    title: { rendered: "Private Birthday Celebration" },
    excerpt: { rendered: "Capturing the energy of the evening." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1500530855697) }] },
    acf: {
      gallery_type: "Events",
      is_featured: false,
      gallery_images: [{ url: u(1500530855697) }],
    },
  },
  {
    id: 9,
    slug: "nightlife-premiere-event",
    title: { rendered: "Nightlife Premiere Event" },
    excerpt: { rendered: "Candid shots in dramatic lighting." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1492684223066) }] },
    acf: {
      gallery_type: "Events",
      is_featured: true,
      gallery_images: [{ url: u(1492684223066) }],
    },
  },

  // --- EXTRA FILLERS ---
  {
    id: 10,
    slug: "sunset-engagement",
    title: { rendered: "Sunset Engagement Session" },
    excerpt: { rendered: "Warm tones and candid storytelling." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1519741497674) }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: false,
      gallery_images: [{ url: u(1519741497674) }],
    },
  },
  {
    id: 11,
    slug: "studio-fashion-set",
    title: { rendered: "Studio Fashion Set" },
    excerpt: { rendered: "Clean lines and editorial sharpness." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1494790108377) }] },
    acf: {
      gallery_type: "Exotic",
      is_featured: false,
      gallery_images: [{ url: u(1494790108377) }],
    },
  },
  {
    id: 12,
    slug: "rooftop-private-event",
    title: { rendered: "Rooftop Private Event" },
    excerpt: { rendered: "City lights and candid energy." },
    _embedded: { "wp:featuredmedia": [{ source_url: u(1505238680356) }] },
    acf: {
      gallery_type: "Events",
      is_featured: false,
      gallery_images: [{ url: u(1505238680356) }],
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
