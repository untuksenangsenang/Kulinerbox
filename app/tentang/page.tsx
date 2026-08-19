import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Leaf, Clock, Coins, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali lebih dekat Kulinerbox — catering UMKM terpercaya di Yogyakarta. Bahan segar, kirim tepat waktu, harga bersahabat.",
};

const deliveryAreas = [
  "Kota Yogyakarta",
  "Kabupaten Bantul",
];

const timeline = [
  { year: "2019", label: "Kulinerbox berdiri", desc: "Mulai dari dapur rumahan dengan semangat berbagi cita rasa." },
  { year: "2020", label: "Pertama melayani korporat", desc: "Memperluas layanan ke segmen rapat kantor dan event bisnis." },
  { year: "2022", label: "500+ acara terlayani", desc: "Meraih kepercayaan dari berbagai kalangan di Yogyakarta." },
  { year: "2024", label: "Hadir secara digital", desc: "Meluncurkan website resmi untuk kemudahan pemesanan pelanggan." },
];

export default function TentangPage() {
  const waLink = buildGeneralWhatsAppLink(siteConfig.whatsapp.number);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Tentang Kulinerbox
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dari dapur rumahan ke meja acara Anda — perjalanan kami dimulai
            dengan semangat berbagi cita rasa terbaik.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-brand-dark text-3xl mb-4">
                Cerita Kami
              </h2>
              <div className="w-12 h-1 bg-brand-primary rounded-full mb-6" />
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Kulinerbox lahir dari kecintaan kami pada masakan Indonesia
                  dan keinginan untuk menghadirkan pengalaman makan yang
                  menyenangkan di setiap acara.
                </p>
                <p>
                  Dimulai dari dapur rumahan yang kecil, kami terus tumbuh
                  berkat kepercayaan pelanggan yang setia. Kini Kulinerbox telah
                  melayani ratusan acara dari rapat kantor skala kecil hingga
                  hajatan besar ribuan tamu.
                </p>
                <p>
                  Prinsip kami sederhana:{" "}
                  <strong className="text-brand-primary">
                    bahan segar, rasa konsisten, dan pengiriman tepat waktu.
                  </strong>{" "}
                  Karena kami percaya, makanan yang enak adalah bagian dari
                  kesuksesan sebuah acara.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-brand-cream-dark mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs text-brand-primary font-semibold">{item.year}</p>
                    <p className="font-heading font-bold text-brand-dark">{item.label}</p>
                    <p className="text-brand-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Komitmen Kami"
            subtitle="Setiap pesanan dibuat dengan standar kualitas yang sama tingginya."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Leaf, label: "Bahan Segar", desc: "Dipilih setiap hari" },
              { icon: Clock, label: "Tepat Waktu", desc: "Garansi on-time" },
              { icon: Coins, label: "Harga Fair", desc: "Transparan & terjangkau" },
              { icon: ShieldCheck, label: "Higienis", desc: "Standar kebersihan" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-card flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-3 shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="font-heading font-bold text-brand-dark text-sm">{item.label}</p>
                <p className="text-brand-muted text-xs mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area pengiriman */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Area Pengiriman" subtitle={`Kulinerbox melayani pengiriman ke seluruh wilayah ${siteConfig.contact.city} dan sekitarnya.`} />
          <div className="flex flex-wrap justify-center gap-3">
            {deliveryAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-brand-cream text-brand-primary font-semibold text-sm px-5 py-2.5 rounded-full border border-brand-cream-dark"
              >
                <MapPin className="w-4 h-4 text-brand-primary" />
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-brand-muted text-sm mt-6">
            Butuh pengiriman ke area lain? Hubungi kami untuk konfirmasi ketersediaan.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-3">
            Yuk, Mulai Pesan!
          </h2>
          <p className="text-white/80 mb-6">
            Konsultasikan kebutuhan catering acara Anda gratis via WhatsApp.
          </p>
          <a
            id="tentang-cta-wa"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wa text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-500 transition-all duration-200 shadow-wa hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
