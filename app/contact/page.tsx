import type { Metadata } from "next"
import ContactContent from "./ContactContent"

export const metadata: Metadata = {
  title: "İletişim - Bize Ulaşın",
  description:
    "Örnek İş Dekor: Siteler Fatin sokak No:36 4 numara Altındağ/ANKARA. Telefon ve WhatsApp: 0 551 731 18 93. Mobilyalarımız hakkında bilgi almak için bize ulaşın.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Örnek İş Dekor - İletişim Bilgileri",
    description:
      "Siteler Fatin sokak No:36 4 numara Altındağ/ANKARA adresindeki Örnek İş Dekor'a telefon veya WhatsApp üzerinden ulaşın: 0 551 731 18 93.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Örnek İş Dekor logo",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
