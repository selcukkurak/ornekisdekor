import type { Metadata } from "next"
import ProductsContent from "./ProductsContent"

export const metadata: Metadata = {
  title: "Ürünlerimiz - Bahçe Mobilyaları Koleksiyonu",
  description:
    "Ornek Is Dekor'un geniş bahçe mobilyaları koleksiyonunu keşfedin. Sandalyeler, masalar, salıncaklar ve daha fazlası için ürün kataloğumuza göz atın.",
  openGraph: {
    title: "Ornek Is Dekor - Bahçe Mobilyaları Koleksiyonu",
    description:
      "Geniş bahçe mobilyaları koleksiyonumuzu keşfedin. Sandalyeler, masalar, salıncaklar ve daha fazlası için ürün kataloğumuza göz atın.",
    images: [
      {
        url: "https://www.ornekisdekor.com/products-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ornek Is Dekor Ürün Koleksiyonu",
      },
    ],
  },
}

export default function ProductsPage() {
  return <ProductsContent />
}
