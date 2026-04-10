"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Category = "Tümü" | "Oturma Grupları" | "Masa Setleri" | "Şezlonglar" | "Bahçe Aksesuarları"

const products = [
  {
    id: 1,
    name: "Alüminyum 5'li Oturma Grubu",
    category: "Oturma Grupları" as Category,
    description: "Dayanıklı alüminyum iskelet, su geçirmez minderleriyle 4 koltuk ve 1 orta sehpa.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "L Koltuk Bahçe Seti",
    category: "Oturma Grupları" as Category,
    description: "Geniş L formlu köşe koltuk, bahçe ve teras için ideal. Polirattan örgü.",
    image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Tik Ahşap Yemek Masası Seti",
    category: "Masa Setleri" as Category,
    description: "6 kişilik tik ahşap yemek masası ve sandalye seti. Doğal ahşap doku ve dayanıklılık.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Alüminyum Kare Masa Seti",
    category: "Masa Setleri" as Category,
    description: "4 kişilik paslanmaz alüminyum masa ve sandalye takımı. Hem balkon hem bahçe için.",
    image: "https://images.unsplash.com/photo-1595830796847-1649a3a94c73?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Polirattan Şezlong",
    category: "Şezlonglar" as Category,
    description: "UV dayanımlı polirattan örgü, ayarlanabilir başlık. Havuz ve bahçe keyfini artırır.",
    image: "https://images.unsplash.com/photo-1562182384-08115de5ee97?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Alüminyum Şezlong Çifti",
    category: "Şezlonglar" as Category,
    description: "İkili şezlong seti, su geçirmez kılıflı yastıklar dahil. Hafif ve taşıması kolay.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Bahçe Şemsiyesi",
    category: "Bahçe Aksesuarları" as Category,
    description: "3x3m alüminyum direkli, UV korumalı kumaş güneş şemsiyesi. Katlanır mekanizma.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Saksılık & Çiçeklik Seti",
    category: "Bahçe Aksesuarları" as Category,
    description: "Dekoratif ahşap ve metal saksılık seti. Bahçe düzenlemesi için şık çözüm.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Rattan Salıncak",
    category: "Oturma Grupları" as Category,
    description: "Çelik taşıyıcı çerçeveli, polirattan örgülü bahçe salıncağı. Ailece kullanım için.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
  },
]

const categories: Category[] = ["Tümü", "Oturma Grupları", "Masa Setleri", "Şezlonglar", "Bahçe Aksesuarları"]

const ProductsContent = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü")

  const filtered = activeCategory === "Tümü" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ürünlerimiz</h1>
          <p className="text-green-200">Bahçenize özel kaliteli mobilya çözümleri</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-400 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-800 transition-colors"
                >
                  Bilgi Al
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsContent
