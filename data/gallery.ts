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
  {
    id: "g1",
    src: "/images/paket-ayam-kentucky.jpeg",
    alt: "Paket Ayam kentucky kentang",
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
  // [ISI DATA] Tambah foto dokumentasi acara di bawah ini
  // Contoh:
  // {
  //   id: "g7",
  //   src: "/images/acara-rapat-kantor.jpg",
  //   alt: "Catering rapat kantor Kulinerbox",
  //   caption: "Rapat Kantor PT. XYZ",
  //   category: "acara",
  // },
];
