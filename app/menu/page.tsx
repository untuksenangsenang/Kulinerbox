import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu & Paket",
  description:
    "Lihat semua paket nasi box dan snack box Kulinerbox. Filter berdasarkan kategori dan pesan langsung via WhatsApp dengan harga terjangkau.",
};

export default function MenuPage() {
  return <MenuClient />;
}
