import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description: "Hubungi Kulinerbox untuk pemesanan dan pertanyaan.",
};

export default function KontakPage() {
  const waLink = buildGeneralWhatsAppLink(siteConfig.whatsapp.number);

  return (
    <>
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Hubungi Kami
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin berkonsultasi mengenai pesanan Anda.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading
            title="Informasi Kontak"
            subtitle="Silakan hubungi kami melalui saluran berikut untuk pemesanan atau info lebih lanjut"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Alamat */}
            <div className="bg-brand-cream rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-4 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">Alamat</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-2 grow flex items-center justify-center">{siteConfig.contact.address}</p>
              <p className="text-brand-primary text-xs font-semibold">Area pengiriman: {siteConfig.contact.deliveryArea}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-brand-cream rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-4 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">WhatsApp</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4 grow flex items-center justify-center">{siteConfig.whatsapp.displayNumber}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white font-semibold px-6 py-2.5 rounded-full hover:bg-brand-dark transition-all duration-200 text-sm shadow-sm hover:scale-105 active:scale-95"
              >
                Chat Sekarang
              </a>
            </div>

            {/* Jam Operasional */}
            <div className="bg-brand-cream rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-4 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">Jam Operasional</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-2 grow flex items-center justify-center">{siteConfig.contact.operationalHours}</p>
              <p className="text-brand-muted text-xs">{siteConfig.contact.leadTime}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
