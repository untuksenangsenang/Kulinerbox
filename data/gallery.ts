// ============================================================
// DATA GALERI KULINERBOX
// Tambah foto baru dengan menambah item di array ini
// ============================================================

export interface GalleryItem {
  id: string;
  src: string; // path ke /public/images/...
  alt: string;
  caption?: string;
  category?: "produk" | "acara" | "proses";
}

export const galleryItems: GalleryItem[] = [
  // ── NASI BOX ─────────────────────────────────────────────

  {
    id: "g1",
    src: "/images/paket-ayam-kentucky.jpeg",
    alt: "Paket Ayam Kentucky Lengkap",
    caption: "Paket Ayam Kentucky Lengkap",
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

  // ── SNACK BOX ────────────────────────────────────────────

  {
    id: "g8",
    src: "/images/snackbox-ekonomis.jpeg",
    alt: "Paket Snack Ekonomis",
    caption: "Paket Snack Ekonomis",
    category: "produk",
  },

  {
    id: "g9",
    src: "/images/snackbox-hemat.jpeg",
    alt: "Paket Snack Hemat",
    caption: "Paket Snack Hemat",
    category: "produk",
  },

  {
    id: "g10",
    src: "/images/snackbox-premium.jpeg",
    alt: "Paket Snack Premium",
    caption: "Paket Snack Premium",
    category: "produk",
  },

  {
    id: "g11",
    src: "/images/snackbox-sultan.jpeg",
    alt: "Paket Snack Sultan",
    caption: "Paket Snack Sultan",
    category: "produk",
  },

  // ============================================================
  // FOTO DOKUMENTASI ACARA
  // Tambahkan foto acara di bawah ini jika sudah tersedia.
  // ============================================================
];