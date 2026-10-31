import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"
import ProductCard from "./components/ProductCard"

const HomeContent = () => {
  return (
    <>
      <section className="bg-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-800">Siteler · Ankara</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Evinize ve Bahçenize Yakışan Mobilyalar</h1>
          <p className="text-lg md:text-xl mb-8">
            Ahşap vitrinler, TV üniteleri, bar takımları ve bahçe mobilyaları. Gerçek ürün fotoğraflarımızla koleksiyonumuzu keşfedin.
          </p>
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors text-sm md:text-base"
          >
            Ürünleri Keşfedin
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Öne Çıkan Ürünlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">Tüm {products.length} Ürün Fotoğrafını Gör <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
