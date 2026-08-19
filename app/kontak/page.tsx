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

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Informasi Kontak"
                subtitle="Silakan hubungi kami melalui saluran berikut"
              />
              <div className="space-y-8 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary p-3 rounded-xl text-white shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-lg">Alamat</h3>
                    <p className="text-brand-muted mt-1">{siteConfig.contact.address}</p>
                    <p className="text-brand-muted text-sm mt-1">Area pengiriman: {siteConfig.contact.deliveryArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary p-3 rounded-xl text-white shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-lg">WhatsApp</h3>
                    <p className="text-brand-muted mt-1">{siteConfig.whatsapp.displayNumber}</p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-semibold text-sm hover:underline mt-2 inline-block">Chat Sekarang &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary p-3 rounded-xl text-white shadow-md">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-lg">Jam Operasional</h3>
                    <p className="text-brand-muted mt-1">{siteConfig.contact.operationalHours}</p>
                    <p className="text-brand-muted text-sm mt-1">{siteConfig.contact.leadTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8">
               <h3 className="font-heading font-bold text-2xl text-brand-dark mb-6">Kirim Pesan</h3>
               <form className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-brand-dark mb-1">Nama Lengkap</label>
                   <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Masukkan nama Anda" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-brand-dark mb-1">Nomor WhatsApp</label>
                   <input type="tel" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Contoh: 08123456789" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-brand-dark mb-1">Pesan</label>
                   <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Tuliskan pertanyaan atau detail pesanan Anda di sini..."></textarea>
                 </div>
                 <button type="button" className="w-full bg-brand-primary text-white font-semibold py-3 rounded-lg hover:bg-brand-dark transition-colors">Kirim Pesan</button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
