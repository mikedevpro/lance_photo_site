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
  {
    id: 10,
    slug: "golden-hour-wedding-ceremony",
    title: { rendered: "Golden Hour Wedding Ceremony" },
    excerpt: { rendered: "Editorial wedding portraits with warm sunset light." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1519741497674-611481863552") }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      location: "Phoenix, AZ",
      shoot_date: "2026-01-12",
      short_description: "Golden hour ceremony with clean editorial tones.",
      gallery_images: [
        { url: img("photo-1519741497674-611481863552") },
        { url: img("photo-1606216794074-735e91aa2c92") },
        { url: img("photo-1537633552985-df8429e8048b") },
      ],
    },
  },
  {
    id: 11,
    slug: "desert-chapel-vows",
    title: { rendered: "Desert Chapel Vows" },
    excerpt: { rendered: "Candid vows and portraits framed by Arizona skies." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1522673607200-164d1b6ce486") }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      location: "Phoenix, AZ",
      shoot_date: "2026-01-12",
      short_description: "Golden hour ceremony with clean editorial tones.",
      gallery_images: [
        { url: img("photo-1522673607200-164d1b6ce486") },
        { url: img("photo-1511285560929-80b456fea0bc") },
        { url: img("photo-1507504031003-b417219a0fde") },
      ],
    },
  },
  {
    id: 12,
    slug: "rooftop-reception-glow",
    title: { rendered: "Rooftop Reception Glow" },
    excerpt: { rendered: "Night portraits and reception coverage with cinematic contrast." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1519225421980-715cb0215aed") }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      location: "Phoenix, AZ",
      shoot_date: "2026-01-12",
      short_description: "Golden hour ceremony with clean editorial tones.",
      gallery_images: [
        { url: img("photo-1519225421980-715cb0215aed") },
        { url: img("photo-1522673607200-164d1b6ce486") },
        { url: img("photo-1516589091380-5d8e87df6991") },
      ],
    },
  },
  {
    id: 13,
    slug: "classic-black-tie-celebration",
    title: { rendered: "Classic Black-Tie Celebration" },
    excerpt: { rendered: "Refined ceremony details and polished couple portraits." },
    _embedded: { "wp:featuredmedia": [{ source_url: img("photo-1511285560929-80b456fea0bc") }] },
    acf: {
      gallery_type: "Weddings",
      is_featured: true,
      location: "Phoenix, AZ",
      shoot_date: "2026-01-12",
      short_description: "Golden hour ceremony with clean editorial tones.",
      gallery_images: [
        { url: img("photo-1511285560929-80b456fea0bc") },
        { url: img("photo-1529634897861-1a49e3c3b7b5") },
        { url: img("photo-1507504031003-b417219a0fde") },
      ],
    },
  },
];

export const mockServices = [
  {
    id: 101,
    slug: "exotic-photography",
    title: { rendered: "Exotic Photography" },
    excerpt: { rendered: "Artistic, expressive sessions tailored to your vision." },
    content: {
      rendered:
        "<p>Creative sessions with confident direction, premium edits, and a comfortable, professional experience.</p>",
    },
    acf: {
      service_type: "Exotic",
      starting_price_text: "Packages start at $X",
      what_includes: [
        { item_title: "Session planning", item_detail: "Outfit + concept guidance" },
        { item_title: "Directed posing", item_detail: "Comfortable coaching throughout" },
        { item_title: "Edited gallery", item_detail: "High-quality retouching & color" },
      ],
      faq: [
        { question: "Do you provide a studio?", answer: "Studio options are available depending on the concept." },
        { question: "How long until delivery?", answer: "Typical turnaround is 7-14 days." },
      ],
    },
  },
  {
    id: 102,
    slug: "wedding-photography",
    title: { rendered: "Wedding Photography" },
    excerpt: { rendered: "Timeless storytelling for one of life's biggest days." },
    content: {
      rendered:
        "<p>Story-driven wedding coverage with a consistent edit style, communication, and reliability.</p>",
    },
    acf: {
      service_type: "Weddings",
      starting_price_text: "Collections start at $X",
      what_includes: [
        { item_title: "Pre-wedding consult", item_detail: "Timeline + shot planning" },
        { item_title: "Full-day coverage", item_detail: "Flexible coverage options" },
        { item_title: "Edited gallery", item_detail: "High-resolution delivery" },
      ],
      faq: [
        { question: "Do you travel?", answer: "Yes-travel is available with advance notice." },
        { question: "Can we add a second shooter?", answer: "Yes, depending on availability." },
      ],
    },
  },
  {
    id: 103,
    slug: "event-photography",
    title: { rendered: "Event Photography" },
    excerpt: { rendered: "Professional coverage for private and corporate events." },
    content: {
      rendered:
        "<p>Clean, consistent event coverage-candid moments, details, and atmosphere with professional delivery.</p>",
    },
    acf: {
      service_type: "Events",
      starting_price_text: "Hourly rates available",
      what_includes: [
        { item_title: "On-site coverage", item_detail: "Candid + key moments" },
        { item_title: "Detail shots", item_detail: "Venue, guests, branding" },
        { item_title: "Fast delivery", item_detail: "Ideal for promos and recap posts" },
      ],
      faq: [
        { question: "How fast is delivery?", answer: "48-72 hours for preview selects, with full delivery shortly after." },
      ],
    },
  },
];
