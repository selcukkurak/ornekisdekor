import type { Metadata } from "next"
import ProductsContent from "./ProductsContent"

export const metadata: Metadata = {
  title: "Bahçe Mobilyaları - Alüminyum, Ahşap, Rattan Koleksiyonu",
  description:
    "Ankara'nın en geniş bahçe mobilyası koleksiyonu. Alüminyum oturma grupları, tik ahşap masa setleri, rattan şezlonglar ve daha fazlası. Özel sipariş kabul edilir.",
  openGraph: {
    title: "Bahçe Mobilyaları Koleksiyonu | Örnek İş Dekor Ankara",
    description:
      "Alüminyum, ahşap ve rattan bahçe mobilyaları. Oturma grupları, masa setleri, şezlonglar. Ankara'ya ücretsiz teslimat.",
  },
}

export default function ProductsPage() {
  return <ProductsContent />
}
