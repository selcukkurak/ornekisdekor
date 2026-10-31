import { products } from "@/lib/products"
import ProductCard from "../components/ProductCard"

const ProductsContent = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-700">Örnek İş Dekor Koleksiyonu</p>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Ahşap ve Bahçe Mobilyalarımız</h1>
      <p className="mb-8 max-w-3xl text-gray-600">İşletmemizden {products.length} ürün fotoğrafını inceleyin. Aynı modelin farklı açıları ayrı kartlarda gösterilir. Fotoğrafları büyütebilir, ilgilendiğiniz ürünün koduyla WhatsApp’tan bilgi alabilirsiniz.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsContent
