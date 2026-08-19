"use client";

import { useState, useMemo } from "react";
import { packages } from "@/data/packages";
import type { PackageCategory } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import { ClipboardEdit, AlarmClock } from "lucide-react";

type FilterType = "Semua" | PackageCategory;

const filters: FilterType[] = ["Semua", "Nasi Box", "Snack Box"];

export default function MenuClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Semua");

  const filtered = useMemo(() => {
    if (activeFilter === "Semua") return packages;
    return packages.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Menu & Paket
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Pilih paket nasi box atau snack box yang sesuai kebutuhan acara
            Anda. Pesan langsung via WhatsApp dengan input jumlah pesanan.
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(" ", "-")}`}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-brand-primary text-white shadow-md scale-105"
                    : "bg-brand-cream text-brand-primary hover:bg-brand-cream-dark"
                }`}
                aria-pressed={activeFilter === f}
              >
                {f}
                <span className="ml-1.5 text-xs opacity-70">
                  (
                  {f === "Semua"
                    ? packages.length
                    : packages.filter((p) => p.category === f).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-brand-muted">
              <p className="text-lg">Belum ada paket untuk kategori ini.</p>
            </div>
          )}

          {/* Catatan pemesanan */}
          <div className="mt-16 bg-brand-cream rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-brand-dark text-xl mb-3 flex items-center justify-center">
              <ClipboardEdit className="w-6 h-6 text-pink-500 mr-2" /> Cara Memesan
            </h2>
            <ol className="text-sm text-brand-muted space-y-2 text-left max-w-sm mx-auto">
              <li className="flex gap-2">
                <span className="text-brand-primary font-bold">1.</span>
                Pilih paket dan masukkan jumlah pesanan
              </li>
              <li className="flex gap-2">
                <span className="text-brand-primary font-bold">2.</span>
                Klik tombol &ldquo;Pesan via WhatsApp&rdquo;
              </li>
              <li className="flex gap-2">
                <span className="text-brand-primary font-bold">3.</span>
                Chat WhatsApp terbuka dengan pesan otomatis
              </li>
              <li className="flex gap-2">
                <span className="text-brand-primary font-bold">4.</span>
                Admin konfirmasi detail & pembayaran via chat
              </li>
            </ol>
            <p className="text-xs text-brand-muted mt-4 flex items-center justify-center">
              <AlarmClock className="w-4 h-4 text-pink-500 mr-1" /> Pesan minimal H-2 (dua hari sebelum acara)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
