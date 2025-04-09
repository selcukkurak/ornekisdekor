import type { Metadata } from "next"
import HomeContent from "./HomeContent"

export const metadata: Metadata = {
  title: "Ana Sayfa - Kaliteli Bahçe Mobilyaları",
  description:
    "Ornek Is Dekor ile bahçeniz için en kaliteli ve şık mobilyaları keşfedin. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.",
  openGraph: {
    title: "Ornek Is Dekor - Kaliteli Bahçe Mobilyaları",
    description:
      "Bahçeniz için en kaliteli ve şık mobilyaları Ornek Is Dekor'da bulun. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.",
    images: [
      {
        url: "https://www.ornekisdekor.com/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Örnek İş Dekor Bahçe Mobilyaları",
      },
    ],
  },
}

export default function HomePage() {
  return <HomeContent />
}
