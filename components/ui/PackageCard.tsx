"use client";

import Image from "next/image";
import { useState } from "react";
import type { Package } from "@/data/packages";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { formatRupiah } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [quantity, setQuantity] = useState<number | "">(pkg.minOrder);

  const waLink = buildWhatsAppLink({
    phoneNumber: siteConfig.whatsapp.number,
    packageName: pkg.name,
    quantity: quantity === "" ? "..." : quantity,
  });

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} Kulinerbox`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
            pkg.category === "Nasi Box"
              ? "bg-brand-primary text-white"
              : "bg-brand-dark text-white"
          }`}
        >
          {pkg.category}
        </span>
        {/* Featured/new badge */}
        {pkg.badge && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-pink-400 text-pink-900 shadow-sm border border-pink-300">
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-bold text-brand-dark text-lg leading-snug mb-1">
          {pkg.name}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {pkg.description}
        </p>

        {/* Items list */}
        <ul className="space-y-1 mb-4">
          {pkg.items.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-brand-text"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
          {pkg.items.length > 4 && (
            <li className="text-xs text-brand-muted pl-5">
              +{pkg.items.length - 4} lainnya
            </li>
          )}
        </ul>

        {/* Price & min order */}
        <div className="flex items-end justify-between mb-4 mt-auto">
          <div>
            <p className="text-2xl font-heading font-bold text-brand-primary">
              {formatRupiah(pkg.pricePerPcs)}
            </p>
            <p className="text-xs text-brand-muted">per pcs</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-brand-muted">Min. order</p>
            <p className="text-sm font-semibold text-brand-dark">
              {pkg.minOrder} pcs
            </p>
          </div>
        </div>

        {/* Quantity input + Order button */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label
              htmlFor={`qty-${pkg.id}`}
              className="text-sm text-brand-muted shrink-0"
            >
              Jumlah (pcs):
            </label>
            <input
              id={`qty-${pkg.id}`}
              type="number"
              min={pkg.minOrder}
              step={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="flex-1 min-w-0 border border-brand-cream-dark rounded-lg px-3 py-1.5 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              aria-label={`Jumlah pesanan ${pkg.name}`}
            />
          </div>

          <a
            id={`order-btn-${pkg.id}`}
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-wa text-white py-3 rounded-xl font-semibold text-sm hover:bg-green-500 transition-all duration-200 shadow-sm hover:shadow-wa active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
