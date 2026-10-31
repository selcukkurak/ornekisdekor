import type { Metadata } from "next"
import ProductsContent from "./ProductsContent"

export const metadata: Metadata = {
  title: "Ürünlerimiz - Ahşap ve Bahçe Mobilyaları",
  description:
    "Örnek İş Dekor ürün kataloğunda ahşap dolapları, TV ünitelerini, bar setlerini ve dış mekân oturma ve yemek takımlarını inceleyin.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: "/products",
    title: "Örnek İş Dekor - Mobilya Koleksiyonu",
    description:
      "Ahşap dolaplar, TV üniteleri, bar setleri ve dış mekân oturma ve yemek takımlarından oluşan mobilya koleksiyonumuzu keşfedin.",
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

export default function ProductsPage() {
  return <ProductsContent />
}
