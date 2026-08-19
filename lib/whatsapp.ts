/**
 * lib/whatsapp.ts
 * Helper functions untuk generate WhatsApp link Kulinerbox
 */

/**
 * Membangun link WhatsApp dengan pesan otomatis
 */
export function buildWhatsAppLink(params: {
  phoneNumber: string; // format: 62812xxxxxxx
  packageName: string;
  quantity?: number | string;
}): string {
  const { phoneNumber, packageName, quantity = "..." } = params;
  const message =
    `Halo Kulinerbox, saya mau pesan *${packageName}* sebanyak *${quantity} pcs*. ` +
    `Mohon info lebih lanjut mengenai ketersediaan, harga, dan pengiriman. Terima kasih 🙏`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Link WhatsApp generik (untuk floating button & kontak)
 */
export function buildGeneralWhatsAppLink(phoneNumber: string): string {
  const message =
    "Halo Kulinerbox! Saya ingin bertanya mengenai paket catering yang tersedia. Mohon bantuannya 🙏";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
