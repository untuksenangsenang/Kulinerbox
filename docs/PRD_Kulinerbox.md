# KULINERBOX — Product Requirements Document (PRD)

**Website Company Profile & Katalog Pemesanan Catering**
Versi 1.0 · Agustus 2026 · Status: Draft untuk direview pemilik bisnis

---

## 1. Ringkasan Produk

Kulinerbox adalah usaha catering UMKM yang menyediakan paket nasi box dan snack box untuk kebutuhan acara (rapat kantor, hajatan, seminar, arisan, dan acara harian lainnya). Dokumen ini merangkum kebutuhan pembuatan website resmi Kulinerbox sebagai etalase digital sekaligus kanal pemesanan.

Website **tidak menggunakan payment gateway**. Setiap paket memiliki tombol *Call-to-Action* (CTA) "Pesan Sekarang" yang langsung mengarahkan calon pembeli ke WhatsApp dengan pesan template yang sudah terisi otomatis (nama paket & jumlah), sehingga proses konfirmasi pesanan dan pembayaran dilakukan manual melalui chat WhatsApp dengan admin Kulinerbox.

| Aspek | Keputusan |
|---|---|
| Struktur website | Multi-page (Beranda, Menu, Tentang Kami, Kontak) |
| Pengelolaan konten | Update manual melalui developer/kode (tanpa CMS/admin panel) |
| Fitur tambahan | Galeri foto makanan, Testimoni pelanggan, Blog/tips seputar catering |
| Tech stack | Next.js (lihat Bab 9) |

---

## 2. Latar Belakang & Tujuan

### 2.1 Latar Belakang
Saat ini pemesanan Kulinerbox kemungkinan masih mengandalkan promosi dari mulut ke mulut atau media sosial, tanpa etalase digital yang terpusat. Calon pelanggan kesulitan melihat daftar paket, harga, dan cara pemesanan secara jelas dan cepat.

### 2.2 Tujuan Bisnis
- Membangun kredibilitas dan citra profesional Kulinerbox di mata calon pelanggan (korporat maupun personal).
- Mempermudah calon pelanggan melihat pilihan paket nasi box & snack box beserta harga tanpa perlu bertanya satu per satu.
- Mempercepat proses pemesanan dengan mengarahkan langsung ke WhatsApp, tanpa friksi pembuatan akun atau pembayaran online.
- Meningkatkan jumlah leads/chat masuk yang terkonversi menjadi pesanan.

### 2.3 Tujuan Produk (Website)
- Menyediakan informasi paket catering yang lengkap, mudah dibaca, dan mobile-friendly.
- Menyediakan CTA pemesanan via WhatsApp di setiap paket, dengan pesan otomatis yang sudah terisi nama paket & jumlah pesanan.
- Menampilkan galeri foto, testimoni, dan konten blog/tips untuk membangun kepercayaan (trust) dan nilai tambah SEO.

---

## 3. Target Pengguna & Persona

| Persona | Kebutuhan | Perilaku |
|---|---|---|
| Admin Kantor / EO Acara | Cari paket nasi box jumlah besar (>50 pcs), butuh info harga grosir & waktu pengiriman | Browsing dari laptop/HP saat jam kerja, butuh info cepat lalu chat WA |
| Individu (Arisan/Ulang Tahun) | Cari paket porsi kecil-menengah, harga terjangkau | Browsing dari HP, sensitif terhadap foto & testimoni sebelum order |
| Pelanggan Repeat Order | Ingin cepat menemukan menu favorit & langsung order ulang | Datang langsung ke halaman Menu, minim butuh halaman Tentang |

---

## 4. Ruang Lingkup

### 4.1 In-Scope
- Website 4 halaman: Beranda, Menu/Paket, Tentang Kami, Kontak (+ Blog, Galeri, Testimoni).
- Desain responsif (mobile, tablet, desktop).
- Katalog paket nasi box & snack box lengkap dengan foto, deskripsi, harga, dan tombol pesan ke WhatsApp.
- Galeri foto makanan/acara yang pernah dilayani.
- Halaman/kolom testimoni pelanggan.
- Blog/artikel tips seputar catering (statis, dikelola manual oleh developer).
- Optimasi dasar SEO on-page.

### 4.2 Out-of-Scope (versi awal)
- Payment gateway / pembayaran online otomatis.
- Sistem akun/login pelanggan.
- Admin panel/CMS untuk update menu mandiri.
- Sistem tracking pesanan real-time.
- Integrasi otomatis dengan aplikasi kasir/inventori.

---

## 5. Struktur Halaman (Sitemap)

| Halaman | Tujuan | Konten Utama |
|---|---|---|
| Beranda | First impression + value proposition + CTA cepat | Hero banner, tagline, keunggulan, preview paket unggulan, preview testimoni, CTA WhatsApp umum |
| Menu / Paket | Etalase utama semua paket | Kategori paket, kartu paket (foto, nama, isi, harga, min. order), tombol "Pesan via WhatsApp" per paket |
| Galeri | Dokumentasi visual acara & produk | Grid foto makanan & acara |
| Testimoni | Membangun kepercayaan | Kutipan/review pelanggan, nama & jenis acara |
| Tentang Kami | Cerita bisnis, kredibilitas, area layanan | Profil singkat, keunggulan, area pengiriman |
| Blog / Tips | SEO & edukasi calon pelanggan | Daftar artikel, halaman detail artikel |
| Kontak | Kanal komunikasi & lokasi | Nomor WhatsApp, alamat, jam operasional, peta lokasi (opsional), form kontak (opsional) |

> Catatan: Galeri dan Testimoni dapat berupa section di Beranda/Menu dulu, dipisah jadi halaman sendiri jika kontennya sudah banyak.

---

## 6. Alur Pemesanan (User Flow) via WhatsApp

1. Pengunjung membuka halaman Menu dan memilih kategori (Nasi Box / Snack Box).
2. Pengunjung melihat detail paket: foto, isi/menu, harga per pcs, minimal order.
3. Pengunjung mengklik tombol CTA "Pesan via WhatsApp" pada kartu paket.
4. Sistem membuka WhatsApp dengan nomor admin Kulinerbox dan pesan template terisi otomatis, contoh:

   > "Halo, saya mau pesan [Nama Paket] sebanyak [jumlah] pcs untuk tanggal [tanggal acara]. Mohon info selanjutnya, terima kasih."

5. Admin Kulinerbox melanjutkan konfirmasi pesanan, pembayaran, dan pengiriman langsung via chat WhatsApp.

**Detail teknis** — link CTA menggunakan format `wa.me` dengan parameter `text` yang di-*encode*:

```
https://wa.me/62XXXXXXXXXX?text=Halo%2C%20saya%20mau%20pesan%20Nasi%20Box%20Paket%20A%20sebanyak%20...%20pcs
```

- Nomor WhatsApp admin harus format internasional tanpa "+" atau "0" di depan (contoh: `62812xxxxxxx`).
- Sebaiknya field jumlah bisa diisi pengunjung (input angka) sebelum tombol ditekan, agar pesan WA otomatis membawa jumlah pesanan yang sesuai. Jika tidak, gunakan placeholder `...` yang diisi manual oleh pembeli.

---

## 7. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| F-01 | Menampilkan daftar paket dalam bentuk kartu (foto, nama, harga, isi singkat) | Must Have |
| F-02 | Tombol "Pesan via WhatsApp" di tiap kartu paket, membuka wa.me dengan pesan terisi otomatis | Must Have |
| F-03 | Filter paket berdasarkan kategori (Nasi Box / Snack Box) | Must Have |
| F-04 | Section/halaman Galeri foto | Must Have |
| F-05 | Section/halaman Testimoni | Must Have |
| F-06 | Halaman Blog/Tips (daftar + detail artikel) | Must Have |
| F-07 | Halaman Kontak (WA, alamat, jam operasional) | Must Have |
| F-08 | Website responsif (HP, tablet, desktop) | Must Have |
| F-09 | Input jumlah pesanan sebelum klik CTA | Should Have |
| F-10 | Tombol WhatsApp floating di semua halaman | Should Have |
| F-11 | Peta lokasi (embed Google Maps) di Kontak | Nice to Have |
| F-12 | Filter/pencarian paket berdasarkan rentang harga | Nice to Have |

---

## 8. Kebutuhan Non-Fungsional

- **Performa**: waktu muat < 3 detik pada 4G rata-rata; gambar dikompresi (WebP direkomendasikan).
- **Mobile-first**: mayoritas trafik dari HP; tombol CTA harus thumb-friendly.
- **SEO dasar**: title & meta description unik per halaman, struktur heading benar, alt text pada gambar.
- **Aksesibilitas dasar**: kontras warna memadai, font mudah dibaca, CTA jelas terlihat.
- **Keamanan**: HTTPS aktif; tidak menyimpan data pembayaran apa pun di website.
- **Skalabilitas konten**: struktur data paket disusun rapi di kode agar mudah ditambah/diubah developer.
- **Kompatibilitas browser**: Chrome, Safari, WebView Android/iOS.

---

## 9. Rekomendasi Teknis

Karena tidak memerlukan CMS/admin panel dan tidak ada payment gateway, website ini dibangun sebagai **Next.js static/hybrid site** — ringan, cepat, dan mudah dikembangkan lagi ke depan bila suatu saat perlu CMS.

| Komponen | Rekomendasi | Alasan |
|---|---|---|
| Framework | **Next.js 14+ (App Router) + TypeScript** | SEO-friendly (SSG/SSR), performa baik, ekosistem React luas |
| Styling | **Tailwind CSS** | Cepat membangun UI konsisten, mobile-first |
| Data paket/testimoni/blog | File data statis (`.ts`/`.json`) di dalam project, tanpa database | Sesuai keputusan: update manual via developer, tanpa CMS |
| Hosting | **Vercel** (gratis untuk skala UMKM kecil-menengah) | Native untuk Next.js, deploy otomatis, HTTPS gratis |
| Domain | Domain khusus, contoh: `kulinerbox.id` | Meningkatkan kredibilitas dibanding hanya media sosial |
| Analitik | Google Analytics / Meta Pixel (opsional) | Mengukur pengunjung & konversi klik WhatsApp |
| Gambar | `next/image` dengan file WebP/JPEG optimized | Loading cepat, lazy-load otomatis |

---

## 10. Checklist Konten yang Perlu Disiapkan Pemilik Bisnis

### 10.1 Data Umum
- Logo Kulinerbox (PNG/SVG, latar transparan jika ada).
- Nomor WhatsApp resmi (format internasional).
- Alamat usaha & area jangkauan pengiriman.
- Jam operasional & lead time pemesanan (H-berapa hari).
- Akun media sosial (Instagram, TikTok, dll).

### 10.2 Data Paket
- Nama paket, kategori (Nasi Box/Snack Box/lainnya).
- Harga per pcs (+ harga khusus jumlah besar jika ada).
- Minimal order (pcs).
- Isi/menu paket.
- Foto produk (idealnya 1200x1200px, pencahayaan terang).

### 10.3 Konten Pendukung
- 5–10 foto dokumentasi acara/produk untuk galeri.
- 3–5 testimoni pelanggan (nama, jenis acara, kutipan, foto opsional).
- Profil singkat usaha untuk halaman Tentang Kami.
- 3–5 ide judul artikel blog awal.

> Template pengisian data paket tersedia di file terpisah: `Template_Konten_Paket_Kulinerbox.xlsx`.

---

## 11. Metrik Keberhasilan

| Metrik | Target Awal (3 bulan pertama) |
|---|---|
| Jumlah pengunjung unik/bulan | Baseline terkumpul, naik bertahap tiap bulan |
| Klik tombol "Pesan via WhatsApp" | Dilacak via Google Analytics event / Meta Pixel |
| Rasio klik-ke-chat vs pengunjung halaman Menu | > 5% |
| Waktu muat halaman (mobile) | < 3 detik |
| Jumlah pesanan yang menyebut "lihat dari website" | Dicatat manual oleh admin saat chat masuk |

---

## 12. Asumsi & Pertanyaan Terbuka

### 12.1 Asumsi
- Update konten (harga, menu baru) frekuensinya jarang sehingga update manual via developer masih efisien.
- Pemilik bisnis sudah punya minimal 1 nomor WhatsApp khusus bisnis yang aktif dipantau admin.
- Pembayaran & detail pesanan (alamat antar, waktu, dll) dilakukan manual via chat WhatsApp, di luar sistem website.

### 12.2 Pertanyaan Terbuka
- Apakah perlu lebih dari 1 nomor WhatsApp (beda wilayah/tim)?
- Apakah ada rencana menambah metode pemesanan lain (Instagram DM, Google Form)?
- Apakah dibutuhkan opsi bahasa Inggris (untuk klien korporat/ekspatriat)?
- Apakah sudah punya domain, atau perlu dibantu pendaftaran domain & hosting?

---

## 13. Rencana Tahapan Pengerjaan (Milestone Usulan)

| Tahap | Aktivitas | Estimasi Durasi |
|---|---|---|
| 1. Persiapan Konten | Kumpulkan data paket, foto, testimoni sesuai checklist Bab 10 | 3–7 hari |
| 2. Desain (UI) | Wireframe & desain visual (warna, tipografi, layout) | 3–5 hari |
| 3. Development | Bangun halaman + fitur CTA WhatsApp, galeri, testimoni, blog (Next.js) | 5–10 hari |
| 4. Review & Revisi | Pemilik bisnis review, revisi konten/tampilan | 2–3 hari |
| 5. Deploy & Go-Live | Setup domain, hosting (Vercel), testing akhir, publish | 1–2 hari |

---

*Dokumen ini adalah draft awal dan dapat disesuaikan lebih lanjut bersama pemilik bisnis Kulinerbox sebelum proses desain & development dimulai.*
