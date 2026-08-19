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
    minOrder: 25,
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
    minOrder: 25,
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
    minOrder: 25,
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
    minOrder: 50,
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
    minOrder: 50,
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
    minOrder: 25,
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
    minOrder: 50,
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
    minOrder: 50,
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
  // Paket Snack dapat request sesuai kebutuhan pelanggan.

  {
    id: "snackbox-ekonomis",
    category: "Snack Box",
    name: "Paket Snack Ekonomis",
    pricePerPcs: 8000,
    minOrder: 50,
    description:
      "Paket snack ekonomis yang cocok untuk berbagai acara dengan pilihan snack yang lezat dan praktis.",
    items: [
      "Onde-onde",
      "Tahu bakso",
      "Kletikan",
    ],
    image: "/images/snackbox-ekonomis.jpeg",
    isFeatured: true,
    badge: "Hemat",
  },

  {
    id: "snackbox-hemat",
    category: "Snack Box",
    name: "Paket Snack Hemat",
    pricePerPcs: 10000,
    minOrder: 50,
    description:
      "Paket snack hemat dengan kombinasi jajanan yang cocok untuk rapat, seminar, acara kampus, arisan, dan berbagai kegiatan lainnya.",
    items: [
      "Donat",
      "Tahu bakso",
      "Risol",
      "Kletikan",
    ],
    image: "/images/snackbox-hemat.jpeg",
    isFeatured: true,
  },

  {
    id: "snackbox-premium",
    category: "Snack Box",
    name: "Paket Snack Premium",
    pricePerPcs: 12000,
    minOrder: 50,
    description:
      "Paket snack premium dengan pilihan jajanan yang lebih beragam dan cocok untuk acara formal maupun spesial.",
    items: [
      "Cake Roll",
      "Arem-arem",
      "Tahu bakso",
      "Kacang bawang",
    ],
    image: "/images/snackbox-premium.jpeg",
    isFeatured: true,
    badge: "Premium",
  },

  {
    id: "snackbox-sultan",
    category: "Snack Box",
    name: "Paket Snack Sultan",
    pricePerPcs: 15000,
    minOrder: 50,
    description:
      "Paket snack dengan pilihan jajanan spesial untuk memberikan sajian yang lebih istimewa di berbagai acara.",
    items: [
      "Donat karakter",
      "Risol mayo",
      "Arem-arem",
      "Kacang mete",
    ],
    image: "/images/snackbox-sultan.jpeg",
    isFeatured: true,
    badge: "Favorit",
  },
];