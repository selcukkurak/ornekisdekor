import type { Metadata } from "next"
import ContactContent from "./ContactContent"

export const metadata: Metadata = {
  title: "İletişim - Bize Ulaşın",
  description:
    "Ornek Is Dekor ile iletişime geçin. Adres bilgilerimiz, telefon numaramız ve e-posta adresimiz. Sorularınız için bize ulaşın veya iletişim formumuz aracılığıyla mesaj gönderin.",
  openGraph: {
    title: "Ornek Is Dekor - İletişim Bilgileri",
    description:
      "Ornek Is Dekor ile iletişime geçin. Adres bilgilerimiz, telefon numaramız ve e-posta adresimiz. Sorularınız için bize ulaşın veya iletişim formumuz aracılığıyla mesaj gönderin.",
    images: [
      {
        url: "https://www.ornekisdekor.com/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ornek Is Dekor İletişim",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
