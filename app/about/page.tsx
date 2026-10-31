import type { Metadata } from "next"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "Hakkımızda - Örnek İş Dekor",
  description:
    "Ankara Siteler'deki Örnek İş Dekor'u tanıyın. Ahşap dolaplar, TV üniteleri, bar setleri ve dış mekân oturma ve yemek takımlarımız hakkında bilgi alın.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "Örnek İş Dekor Hakkında",
    description:
      "Ankara Siteler'de ahşap dolaplar, TV üniteleri, bar setleri ve dış mekân oturma ve yemek takımları sunan Örnek İş Dekor'u tanıyın.",
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

export default function AboutPage() {
  return <AboutContent />
}
