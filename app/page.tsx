import type { Metadata } from "next"
import HomeContent from "./HomeContent"

export const metadata: Metadata = {
  title: "Ana Sayfa - Ankara Bahçe Mobilyası Uzmanı",
  description:
    "Ankara'nın güvenilir bahçe mobilyası firması. Alüminyum, ahşap ve rattan mobilyalarda 20+ yıllık deneyim. Ostim OSB'de özel üretim, ücretsiz montaj.",
  openGraph: {
    title: "Örnek İş Dekor - Ankara Bahçe Mobilyası Uzmanı",
    description:
      "Ankara'nın güvenilir bahçe mobilyası firması. Alüminyum, ahşap ve rattan mobilyalarda 20+ yıllık deneyim, ücretsiz montaj.",
    images: [
      {
        url: "https://www.ornekisdekor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Örnek İş Dekor - Ankara Bahçe Mobilyaları",
      },
    ],
  },
}

export default function HomePage() {
  return <HomeContent />
}
