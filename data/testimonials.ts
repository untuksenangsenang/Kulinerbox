// ============================================================
// DATA TESTIMONI KULINERBOX
// Tambah / ubah testimoni di sini
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  eventType: string; // jenis acara
  location?: string;
  quote: string;
  rating: number; // 1–5
  avatar?: string; // opsional: path ke foto profil
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    eventType: "Rapat Kantor",
    location: "PT. Maju Bersama, Sleman",
    quote:
      "Pesanan nasi box untuk rapat bulanan kami selalu tepat waktu dan rasanya konsisten enak. Rekan-rekan di kantor sampai selalu minta Kulinerbox setiap ada acara! Pelayanan admin juga sangat responsif.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Siti Rahayu",
    eventType: "Arisan Keluarga",
    location: "Bantul, Yogyakarta",
    quote:
      "Snack box-nya enak-enak semua, tampilannya juga cantik dan rapi. Ibu-ibu di arisan pada tanya pesan di mana. Harganya pun sangat terjangkau untuk kualitas seperti ini!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Dr. Ahmad Fauzi",
    eventType: "Seminar Akademik",
    location: "Universitas Ahmad Dahlan, Yogyakarta",
    quote:
      "Kami memesan 150 snack box premium untuk seminar nasional. Kulinerbox berhasil deliver tepat waktu, presentasi boxnya profesional, dan peserta seminar sangat puas. Pasti akan pesan lagi!",
    rating: 5,
  },
  {
    id: "t4",
    name: "Dewi Lestari",
    eventType: "Pengajian Rutin",
    location: "Kotagede, Yogyakarta",
    quote:
      "Gorengannya masih hangat waktu diantar, porsinya pas dan rasanya nggak kalah sama beli di warung. Sudah 3 bulan kami langganan Kulinerbox untuk pengajian bulanan.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Indra Permana",
    eventType: "Hajatan / Walimahan",
    location: "Sleman, Yogyakarta",
    quote:
      "Pesan nasi rendang untuk walimahan adik saya — 200 porsi. Kualitasnya top, bumbunya meresap, tamu-tamu pada pujian. Kulinerbox sangat membantu mempersiapkan acara kami dengan sempurna.",
    rating: 5,
  },
];
