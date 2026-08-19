import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import PackageCard from "@/components/ui/PackageCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Utensils, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

const featuredPackages = packages.filter((p) => p.isFeatured).slice(0, 4);
const previewTestimonials = testimonials.slice(0, 3);

const keunggulan = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Bahan Segar Pilihan",
    desc: "Kami menggunakan bahan-bahan segar yang dipilih setiap hari untuk menjaga kualitas dan cita rasa terbaik.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kirim Tepat Waktu",
    desc: "Pengiriman on-time adalah prioritas kami. Pesanan tiba sebelum acara dimulai, tanpa perlu khawatir.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Harga Bersahabat",
    desc: "Kualitas premium dengan harga yang terjangkau untuk semua kalangan, mulai dari pesanan kecil hingga besar.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Dibuat dengan Cinta",
    desc: "Setiap paket disiapkan dengan penuh perhatian dan ketelitian, karena kepuasan pelanggan adalah kebanggaan kami.",
  },
];

export default function HomePage() {
  const waLink = buildGeneralWhatsAppLink(siteConfig.whatsapp.number);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Kulinerbox — nasi box dan snack box premium untuk semua acara"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white pt-24 pb-16">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <Utensils className="w-4 h-4 text-white" /> Catering Terpercaya di Yogyakarta
          </span>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-fade-in-up">
            Nasi Box & Snack Box
            <span className="block text-white">untuk Segala Acara</span>
          </h1>

          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Dari acara kampus, rapat kantor, seminar, hajatan, hingga arisan — Kulinerbox hadir dengan cita rasa lezat, tampilan rapi, dan pengiriman tepat waktu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link
              id="hero-cta-menu"
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-brand-cream transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-lg"
            >
              Lihat Paket
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              id="hero-cta-wa"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wa text-white font-semibold px-8 py-4 rounded-full hover:bg-green-500 transition-all duration-200 shadow-wa hover:shadow-lg hover:scale-105 active:scale-95 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-sm mx-auto animate-fade-in-up animation-delay-400">
            {[
              { value: "500+", label: "Acara Dilayani" },
              { value: "98%", label: "Pelanggan Puas" },
              { value: "H-2", label: "Lead Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-heading font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle" aria-hidden="true">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── KEUNGGULAN ─────────────────────────────────────── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mengapa Pilih Kulinerbox?"
            subtitle="Kami berkomitmen menghadirkan pengalaman catering yang menyenangkan dan berkesan untuk setiap acara Anda."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulan.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-white mb-4 group-hover:bg-brand-dark transition-colors duration-300 shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREVIEW PAKET ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Paket Unggulan Kami"
            subtitle="Pilihan terlaris dari nasi box dan snack box Kulinerbox. Semua paket bisa dipesan langsung via WhatsApp."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="text-center">
            <Link
              id="home-see-all-packages"
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-semibold px-8 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Lihat Semua Paket
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONI PREVIEW ──────────────────────────────── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Kata Pelanggan Kami"
            subtitle="Kepercayaan pelanggan adalah motivasi terbesar kami untuk terus meningkatkan kualitas."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {previewTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="text-center">
            <Link
              id="home-see-all-testimonials"
              href="/testimoni"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-dark transition-colors"
            >
              Lihat semua testimoni
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA PENUTUP ────────────────────────────────────── */}
      <section className="py-20 bg-cta-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Siap Pesan untuk Acara Anda?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Konsultasikan kebutuhan catering Anda dengan admin Kulinerbox
            sekarang. Kami siap membantu merencanakan menu terbaik untuk acara
            Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="home-cta-wa-final"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wa text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-green-400 transition-all duration-200 shadow-wa hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-semibold px-8 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Lihat Menu Lengkap
            </Link>
          </div>

          {/* Contact info */}
          <div className="flex items-center justify-center gap-3 text-white/80 text-sm mt-10 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-white" /> {siteConfig.whatsapp.displayNumber}
            </span>
            <span>&nbsp;·&nbsp;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-white" /> {siteConfig.contact.operationalHours}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
