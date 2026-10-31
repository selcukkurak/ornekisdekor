import type { Metadata } from "next"
import HomeContent from "./HomeContent"

export const metadata: Metadata = {
  title: "Ana Sayfa - Ahşap ve Bahçe Mobilyaları",
  description:
    "Örnek İş Dekor'da ahşap dolaplar, TV üniteleri, bar setleri ve dış mekân oturma ve yemek takımlarını keşfedin.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Örnek İş Dekor - Ahşap ve Bahçe Mobilyaları",
    description:
      "Ahşap dolaplar, TV üniteleri, bar setleri ve dış mekân oturma ve yemek takımları için Örnek İş Dekor ürünlerini inceleyin.",
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

export default function HomePage() {
  return <HomeContent />
}
