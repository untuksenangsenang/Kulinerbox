import type { Metadata } from "next";
import { galleryItems } from "@/data/gallery";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri foto produk dan dokumentasi acara Kulinerbox — nasi box dan snack box untuk berbagai kegiatan di Yogyakarta.",
};

export default function GaleriPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Galeri Kami
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Lihat koleksi foto produk dan dokumentasi acara yang telah kami
            layani. Klik foto untuk memperbesar.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />

          {galleryItems.length === 0 && (
            <div className="text-center py-20 text-brand-muted">
              <p>Galeri sedang dipersiapkan. Kunjungi kembali segera!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
