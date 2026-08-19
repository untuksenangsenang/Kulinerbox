// ============================================================
// DATA GALERI KULINERBOX
// Tambah foto baru dengan menambah item di array ini
// ============================================================

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: "produk" | "acara" | "proses";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/paket-ayam-kentucky.jpeg",
    alt: "Paket Ayam Kentucky Kentang",
    caption: "Paket Ayam Kentucky Kentang",
    category: "produk",
  },
  {
    id: "g2",
    src: "/images/paket-ayam-bakar-jumbo.jpeg",
    alt: "Paket Ayam Bakar Jumbo",
    caption: "Paket Ayam Bakar Jumbo",
    category: "produk",
  },
  {
    id: "g3",
    src: "/images/paket-ayam-serundeng.jpeg",
    alt: "Paket Ayam Serundeng",
    caption: "Paket Ayam Serundeng",
    category: "produk",
  },
  {
    id: "g4",
    src: "/images/paket-ayam-bakar-telur.jpeg",
    alt: "Paket Ayam Bakar Telur",
    caption: "Paket Ayam Bakar Telur",
    category: "produk",
  },
  {
    id: "g5",
    src: "/images/paket-ayam-bakar-ekonomis.jpeg",
    alt: "Paket Ayam Bakar Ekonomis",
    caption: "Paket Ayam Bakar Ekonomis",
    category: "produk",
  },
  {
    id: "g6",
    src: "/images/paket-ayam-suwir-ekonomis.jpeg",
    alt: "Paket Ayam Suwir Ekonomis",
    caption: "Paket Ayam Suwir Ekonomis",
    category: "produk",
  },
  {
    id: "g7",
    src: "/images/paket-ayam-goreng-lengkap.jpeg",
    alt: "Paket Ayam Goreng Lengkap",
    caption: "Paket Ayam Goreng Lengkap",
    category: "produk",
  },

  // ============================================================
  // FOTO DOKUMENTASI ACARA
  // Tambahkan foto acara di bawah ini jika sudah tersedia
  // ============================================================
];


// ============================================================
// DATA PAKET KULINERBOX
// Tambah / ubah paket di sini — akan tampil otomatis di website
// ============================================================

export type PackageCategory = "Nasi Box" | "Snack Box";

export interface Package {
  id: string;
  category: PackageCategory;
  name: string;
  pricePerPcs: number;
  minOrder: number;
  description: string;
  items: string[];
  image: string;
  isFeatured?: boolean;
  badge?: string;
}

export const packages: Package[] = [
  // ── NASI BOX ─────────────────────────────────────────────

  {
    id: "nasibox-ayam-bakar-jumbo",
    category: "Nasi Box",
    name: "Paket Ayam Bakar Jumbo",
    pricePerPcs: 28000,
    minOrder: 20,
    description:
      "Nasi box dengan ayam bakar ukuran jumbo yang lezat dan mengenyangkan, cocok untuk berbagai acara dan kegiatan.",
    items: [
      "Nasi putih",
      "Ayam bakar jumbo",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-bakar-jumbo.jpeg",
    isFeatured: true,
    badge: "Terlaris",
  },

  {
    id: "nasibox-ayam-bakar-telur",
    category: "Nasi Box",
    name: "Paket Ayam Bakar Telur",
    pricePerPcs: 25000,
    minOrder: 20,
    description:
      "Perpaduan ayam bakar berbumbu khas dengan telur dan lauk pendamping yang cocok untuk rapat, acara kampus, maupun berbagai kegiatan lainnya.",
    items: [
      "Nasi putih",
      "Ayam bakar",
      "Telur",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-bakar-telur.jpeg",
    isFeatured: true,
  },

  {
    id: "nasibox-ayam-serundeng",
    category: "Nasi Box",
    name: "Paket Ayam Serundeng",
    pricePerPcs: 22000,
    minOrder: 20,
    description:
      "Ayam goreng dengan taburan serundeng gurih yang nikmat, menjadi pilihan praktis untuk berbagai acara.",
    items: [
      "Nasi putih",
      "Ayam serundeng",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-serundeng.jpeg",
    isFeatured: true,
  },

  {
    id: "nasibox-ayam-bakar-ekonomis",
    category: "Nasi Box",
    name: "Paket Ayam Bakar Ekonomis",
    pricePerPcs: 15000,
    minOrder: 20,
    description:
      "Pilihan nasi box ekonomis dengan ayam bakar yang tetap lezat dan cocok untuk acara dengan jumlah peserta yang banyak.",
    items: [
      "Nasi putih",
      "Ayam bakar",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-bakar-ekonomis.jpeg",
    isFeatured: true,
    badge: "Hemat",
  },

  {
    id: "nasibox-ayam-kentucky-lengkap",
    category: "Nasi Box",
    name: "Paket Ayam Kentucky Lengkap",
    pricePerPcs: 20000,
    minOrder: 20,
    description:
      "Ayam Kentucky renyah dengan pelengkap yang lengkap, cocok untuk acara keluarga, kantor, kampus, dan berbagai kegiatan lainnya.",
    items: [
      "Nasi putih",
      "Ayam Kentucky",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-kentucky.jpeg",
    isFeatured: true,
  },

  {
    id: "nasibox-ayam-kentucky-kentang",
    category: "Nasi Box",
    name: "Paket Ayam Kentucky Kentang",
    pricePerPcs: 22000,
    minOrder: 20,
    description:
      "Ayam Kentucky yang renyah dipadukan dengan kentang sebagai pelengkap, cocok untuk berbagai acara dan kegiatan.",
    items: [
      "Nasi putih",
      "Ayam Kentucky",
      "Kentang",
      "Lauk pendamping",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-kentucky.jpeg",
    isFeatured: true,
    badge: "Favorit",
  },

  {
    id: "nasibox-ayam-suwir-ekonomis",
    category: "Nasi Box",
    name: "Paket Ayam Suwir Ekonomis",
    pricePerPcs: 12000,
    minOrder: 20,
    description:
      "Nasi box ekonomis dengan ayam suwir berbumbu yang praktis dan cocok untuk berbagai kegiatan dengan jumlah peserta yang banyak.",
    items: [
      "Nasi putih",
      "Ayam suwir",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-suwir-ekonomis.jpeg",
    isFeatured: true,
    badge: "Ekonomis",
  },

  {
    id: "nasibox-ayam-goreng-lengkap",
    category: "Nasi Box",
    name: "Paket Ayam Goreng Lengkap",
    pricePerPcs: 20000,
    minOrder: 20,
    description:
      "Ayam goreng gurih dengan berbagai pelengkap dalam satu paket nasi box yang praktis dan cocok untuk berbagai acara.",
    items: [
      "Nasi putih",
      "Ayam goreng",
      "Lauk pendamping",
      "Sayuran",
      "Sambal",
      "Kerupuk",
    ],
    image: "/images/paket-ayam-goreng-lengkap.jpeg",
    isFeatured: true,
  },

  // ── SNACK BOX ────────────────────────────────────────────

  {
    id: "snackbox-premium",
    category: "Snack Box",
    name: "Snack Box Premium",
    pricePerPcs: 18000,
    minOrder: 25,
    description:
      "Pilihan snack kue basah premium untuk seminar, rapat, dan acara formal. Tampilan elegan dan rasa istimewa.",
    items: [
      "Klepon / onde-onde",
      "Martabak mini",
      "Pastel krispi",
      "Lapis Surabaya",
      "Risoles mayo",
      "Teh / air mineral",
    ],
    image: "/images/snackbox-premium.jpg",
    isFeatured: true,
    badge: "Rekomendasi",
  },

  {
    id: "snackbox-ekonomis",
    category: "Snack Box",
    name: "Snack Box Ekonomis",
    pricePerPcs: 10000,
    minOrder: 50,
    description:
      "Paket hemat untuk acara besar: gorengan aneka pilihan yang gurih dan mengenyangkan. Cocok untuk arisan dan pengajian.",
    items: [
      "Bakwan jagung",
      "Risoles mayo",
      "Tempe mendoan",
      "Tahu bulat",
      "Kue lapis",
      "Air mineral",
    ],
    image: "/images/snackbox-ekonomis.jpg",
  },

  {
    id: "snackbox-vegetarian",
    category: "Snack Box",
    name: "Snack Box Vegetarian",
    pricePerPcs: 15000,
    minOrder: 25,
    description:
      "Snack box khusus vegetarian dengan bahan-bahan segar tanpa daging. Sehat, lezat, dan ramah lingkungan.",
    items: [
      "Tahu krispi",
      "Tempe crispy",
      "Tusuk buah segar",
      "Spring roll sayur",
      "Pastel sayuran",
      "Klepon",
    ],
    image: "/images/snackbox-vegetarian.jpg",
  },
];