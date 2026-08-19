import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Baca testimoni pelanggan setia Kulinerbox. Ratusan acara telah kami layani dengan kepuasan pelanggan di atas 98%.",
};

export default function TestimoniPage() {
  const waLink = buildGeneralWhatsAppLink(siteConfig.whatsapp.number);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Testimoni Pelanggan
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman
            nyata dari pelanggan setia Kulinerbox.
          </p>
        </div>
      </div>

      {/* Stats banner */}
      <div className="bg-brand-cream py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "500+", label: "Acara Dilayani" },
            { value: "98%", label: "Kepuasan Pelanggan" },
            { value: "5★", label: "Rata-rata Rating" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-3xl text-brand-primary">
                {s.value}
              </p>
              <p className="text-brand-muted text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Apa Kata Mereka?"
            subtitle="Dari rapat kantor hingga hajatan besar — pelanggan kami berbicara."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl text-brand-dark mb-3">
            Jadilah Pelanggan Berikutnya!
          </h2>
          <p className="text-brand-muted mb-6">
            Pesan sekarang dan buktikan sendiri kualitas Kulinerbox.
          </p>
          <a
            id="testimoni-cta-wa"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wa text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-500 transition-all duration-200 shadow-wa hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
