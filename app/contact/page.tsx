import type { Metadata } from "next"
import ContactContent from "./ContactContent"

export const metadata: Metadata = {
  title: "İletişim - Ankara Bahçe Mobilyası Showroom",
  description:
    "Örnek İş Dekor ile iletişime geçin. Ostim OSB Mahallesi, Yenimahalle / Ankara. Tel: (0312) 384 56 78. Showroom ziyareti için randevu alın.",
  openGraph: {
    title: "İletişim | Örnek İş Dekor - Ostim OSB Ankara",
    description:
      "Ankara Ostim'deki showroom'umuzu ziyaret edin veya bize ulaşın. Ücretsiz keşif ve teklif için iletişime geçin.",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
