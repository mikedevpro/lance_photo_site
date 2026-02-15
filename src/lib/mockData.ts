const img = (path: string) =>
  `https://images.unsplash.com/${path}?auto=format&fit=crop&w=1600&q=80`;

export const mockGalleries = [
  // WEDDINGS
  {
    id: 1,
    slug: "desert-wedding-sunset",
    title: { rendered: "Desert Wedding — Sunset" },
    excerpt: { rendered: "Golden hour ceremony in the Arizona desert." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1523437237164-d442d57cc3c9") }] },
    acf: { gallery_type: "Weddings", is_featured: true, gallery_images: [{ url: img("photo-1523437237164-d442d57cc3c9") }] },
  },
  {
    id: 2,
    slug: "mountain-wedding-elegance",
    title: { rendered: "Mountain Wedding — Elegance" },
    excerpt: { rendered: "Soft light, dramatic landscape backdrop." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1520857014576-2c4f4c972b57") }] },
    acf: { gallery_type: "Weddings", is_featured: false, gallery_images: [{ url: img("photo-1520857014576-2c4f4c972b57") }] },
  },
  {
    id: 3,
    slug: "intimate-indoor-ceremony",
    title: { rendered: "Intimate Indoor Ceremony" },
    excerpt: { rendered: "Classic tones and emotional storytelling." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1529634897861-1a49e3c3b7b5") }] },
    acf: { gallery_type: "Weddings", is_featured: true, gallery_images: [{ url: img("photo-1529634897861-1a49e3c3b7b5") }] },
  },

  // EXOTIC / EDITORIAL (safe mock vibe)
  {
    id: 4,
    slug: "editorial-exotic-studio",
    title: { rendered: "Editorial Exotic — Studio" },
    excerpt: { rendered: "Bold lighting with confident direction." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1524504388940-b1c1722653e1") }] },
    acf: { gallery_type: "Exotic", is_featured: true, gallery_images: [{ url: img("photo-1524504388940-b1c1722653e1") }] },
  },
  {
    id: 5,
    slug: "dramatic-shadow-session",
    title: { rendered: "Dramatic Shadow Session" },
    excerpt: { rendered: "High contrast editorial mood." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1524253482453-3fed8d2fe12b") }] },
    acf: { gallery_type: "Exotic", is_featured: false, gallery_images: [{ url: img("photo-1524253482453-3fed8d2fe12b") }] },
  },
  {
    id: 6,
    slug: "luxury-boudoir-light",
    title: { rendered: "Luxury Boudoir Light" },
    excerpt: { rendered: "Elegant tones with soft natural light." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1517841905240-472988babdf9") }] },
    acf: { gallery_type: "Exotic", is_featured: true, gallery_images: [{ url: img("photo-1517841905240-472988babdf9") }] },
  },

  // EVENTS
  {
    id: 7,
    slug: "corporate-gala-night",
    title: { rendered: "Corporate Gala Night" },
    excerpt: { rendered: "Professional coverage with atmosphere." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1515165562835-c4c1b8c0f0b9") }] },
    acf: { gallery_type: "Events", is_featured: true, gallery_images: [{ url: img("photo-1515165562835-c4c1b8c0f0b9") }] },
  },
  {
    id: 8,
    slug: "private-birthday-event",
    title: { rendered: "Private Birthday Celebration" },
    excerpt: { rendered: "Capturing the energy of the evening." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1500530855697-b586d89ba3ee") }] },
    acf: { gallery_type: "Events", is_featured: false, gallery_images: [{ url: img("photo-1500530855697-b586d89ba3ee") }] },
  },
  {
    id: 9,
    slug: "nightlife-premiere-event",
    title: { rendered: "Nightlife Premiere Event" },
    excerpt: { rendered: "Candid shots in dramatic lighting." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1492684223066-81342ee5ff30") }] },
    acf: { gallery_type: "Events", is_featured: true, gallery_images: [{ url: img("photo-1492684223066-81342ee5ff30") }] },
  },
];
