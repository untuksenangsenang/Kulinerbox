// ============================================================
// DATA ARTIKEL BLOG KULINERBOX
// Tambah artikel baru di sini — slug harus unik
// ============================================================

export interface BlogPost {
  id: string;
  slug: string; // URL: /blog/[slug]
  title: string;
  summary: string;
  content: string; // HTML sederhana (gunakan <p>, <h2>, <ul>, <strong>)
  publishedAt: string; // format: YYYY-MM-DD
  author: string;
  image: string; // path ke /public/images/...
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "tips-memilih-catering-rapat-kantor",
    title: "5 Tips Memilih Catering Nasi Box untuk Rapat Kantor",
    summary:
      "Rapat kantor lebih produktif dengan makanan yang tepat. Simak tips memilih catering nasi box terbaik agar peserta rapat puas dan kenyang.",
    publishedAt: "2026-08-10",
    author: "Tim Kulinerbox",
    image: "/images/nasibox-ayam-bakar.jpg",
    tags: ["tips", "rapat kantor", "nasi box"],
    content: `
<p>Memilih catering untuk rapat kantor bukan perkara sepele. Makanan yang enak dan tepat waktu dapat meningkatkan suasana hati dan produktivitas peserta rapat. Berikut 5 tips yang perlu Anda perhatikan:</p>

<h2>1. Perhatikan Kualitas dan Kesegaran Bahan</h2>
<p>Pastikan penyedia catering menggunakan bahan-bahan segar setiap hari. Nasi box yang dibuat dari bahan berkualitas tidak hanya lebih lezat, tetapi juga lebih aman untuk dikonsumsi banyak orang.</p>

<h2>2. Cek Ketepatan Waktu Pengiriman</h2>
<p>Dalam rapat, waktu sangat berharga. Pilih catering yang memiliki rekam jejak tepat waktu. Kulinerbox berkomitmen mengantarkan pesanan minimal 15 menit sebelum jadwal acara.</p>

<h2>3. Sesuaikan dengan Jumlah Peserta</h2>
<p>Hitung kebutuhan dengan tepat. Sebaiknya pesan 5–10% lebih dari jumlah peserta untuk antisipasi tamu tambahan. Kulinerbox menerima pesanan minimal 20 pcs dengan harga terjangkau.</p>

<h2>4. Pilih Menu yang Variatif</h2>
<p>Pertimbangkan keberagaman selera peserta rapat. Menu seperti ayam bakar, ikan goreng, atau rendang memberikan variasi rasa yang memuaskan.</p>

<h2>5. Pastikan Ada Opsi untuk Berbagai Kebutuhan Khusus</h2>
<p>Tanyakan apakah tersedia pilihan vegetarian atau bebas alergen tertentu untuk mengakomodasi semua peserta rapat.</p>

<p>Dengan memperhatikan kelima poin di atas, rapat kantor Anda akan berjalan lebih lancar dan peserta pun lebih berenergi. <strong>Kulinerbox siap membantu — hubungi kami via WhatsApp untuk konsultasi gratis!</strong></p>
    `,
  },
  {
    id: "b2",
    slug: "perbedaan-nasi-box-snack-box",
    title: "Nasi Box vs Snack Box: Mana yang Tepat untuk Acara Anda?",
    summary:
      "Bingung memilih antara nasi box atau snack box untuk acara? Kami bantu Anda memilih yang paling tepat berdasarkan jenis dan durasi acara.",
    publishedAt: "2026-08-05",
    author: "Tim Kulinerbox",
    image: "/images/snackbox-premium.jpg",
    tags: ["panduan", "nasi box", "snack box"],
    content: `
<p>Saat merencanakan konsumsi untuk suatu acara, pertanyaan yang sering muncul adalah: nasi box atau snack box? Keduanya memiliki kelebihan masing-masing, dan pilihan yang tepat tergantung pada jenis dan durasi acara Anda.</p>

<h2>Nasi Box: Tepat untuk Acara dengan Jam Makan Utama</h2>
<p>Nasi box ideal untuk acara yang berlangsung saat jam makan siang (11.00–13.00) atau makan malam. Cocok untuk:</p>
<ul>
  <li>Rapat kantor full-day</li>
  <li>Seminar atau konferensi</li>
  <li>Hajatan / walimahan</li>
  <li>Acara keluarga besar</li>
</ul>
<p>Keunggulan nasi box adalah mengenyangkan dan memberikan energi yang cukup untuk aktivitas seharian.</p>

<h2>Snack Box: Tepat untuk Jeda dan Istirahat Singkat</h2>
<p>Snack box lebih fleksibel dan cocok untuk:</p>
<ul>
  <li>Coffee break seminar (10.00 atau 15.00)</li>
  <li>Arisan atau pengajian</li>
  <li>Acara singkat kurang dari 2 jam</li>
  <li>Sambutan tamu undangan</li>
</ul>

<h2>Boleh Keduanya!</h2>
<p>Untuk acara panjang seperti seminar seharian, kombinasi keduanya sangat direkomendasikan: snack box untuk coffee break dan nasi box untuk makan siang. <strong>Konsultasikan kebutuhan acara Anda dengan admin Kulinerbox melalui WhatsApp!</strong></p>
    `,
  },
  {
    id: "b3",
    slug: "cara-pesan-catering-kulinerbox",
    title: "Cara Mudah Pesan Catering Kulinerbox via WhatsApp",
    summary:
      "Pesan catering nasi box dan snack box di Kulinerbox sangat mudah — cukup chat WhatsApp dan pesanan siap diantar. Simak langkah-langkahnya!",
    publishedAt: "2026-07-28",
    author: "Tim Kulinerbox",
    image: "/images/snackbox-vegetarian.jpg",
    tags: ["cara pesan", "whatsapp", "panduan"],
    content: `
<p>Memesan catering di Kulinerbox sangat mudah dan cepat. Tidak perlu membuat akun atau mengisi formulir panjang — cukup chat WhatsApp dan pesanan Anda akan segera diproses!</p>

<h2>Langkah 1: Pilih Paket</h2>
<p>Kunjungi halaman <strong>Menu</strong> di website ini dan pilih paket yang sesuai kebutuhan Anda. Tersedia berbagai pilihan Nasi Box dan Snack Box dengan harga terjangkau.</p>

<h2>Langkah 2: Tentukan Jumlah</h2>
<p>Masukkan jumlah pesanan yang Anda inginkan. Pastikan sesuai dengan minimal order masing-masing paket (umumnya 20–50 pcs).</p>

<h2>Langkah 3: Klik "Pesan via WhatsApp"</h2>
<p>Klik tombol <strong>Pesan via WhatsApp</strong> pada kartu paket pilihan Anda. Sistem akan otomatis membuka WhatsApp dengan pesan yang sudah terisi nama paket dan jumlah pesanan.</p>

<h2>Langkah 4: Konfirmasi Detail Pesanan</h2>
<p>Admin Kulinerbox akan membalas chat Anda untuk mengkonfirmasi detail pesanan: tanggal pengiriman, alamat, dan total biaya.</p>

<h2>Langkah 5: Pembayaran & Konfirmasi</h2>
<p>Lakukan pembayaran sesuai instruksi admin (transfer bank atau tunai). Setelah pembayaran dikonfirmasi, pesanan Anda akan segera diproses!</p>

<p><strong>Tips:</strong> Pesan minimal H-2 (dua hari sebelum acara) agar Kulinerbox dapat mempersiapkan bahan-bahan segar dengan optimal.</p>
    `,
  },
];
