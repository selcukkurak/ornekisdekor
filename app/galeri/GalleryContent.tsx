"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

type GalleryCategory = "Tümü" | "Oturma Grupları" | "Masa Setleri" | "Şezlonglar" | "Özel Tasarımlar"

type GalleryItem = {
  id: number
  src: string
  alt: string
  category: GalleryCategory
  location: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80", alt: "Alüminyum oturma grubu", category: "Oturma Grupları", location: "Çankaya, Ankara" },
  { id: 2, src: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&auto=format&fit=crop&q=80", alt: "Rattan köşe koltuk", category: "Oturma Grupları", location: "Keçiören, Ankara" },
  { id: 3, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80", alt: "Tik ahşap yemek masası", category: "Masa Setleri", location: "Etimesgut, Ankara" },
  { id: 4, src: "https://images.unsplash.com/photo-1595830796847-1649a3a94c73?w=800&auto=format&fit=crop&q=80", alt: "Alüminyum masa seti", category: "Masa Setleri", location: "Sincan, Ankara" },
  { id: 5, src: "https://images.unsplash.com/photo-1562182384-08115de5ee97?w=800&auto=format&fit=crop&q=80", alt: "Polirattan şezlong", category: "Şezlonglar", location: "Yenimahalle, Ankara" },
  { id: 6, src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=80", alt: "Alüminyum şezlong çifti", category: "Şezlonglar", location: "Pursaklar, Ankara" },
  { id: 7, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80", alt: "Rattan salıncak", category: "Özel Tasarımlar", location: "Mamak, Ankara" },
  { id: 8, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80", alt: "Bahçe şemsiyeli set", category: "Masa Setleri", location: "Gölbaşı, Ankara" },
  { id: 9, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80", alt: "Özel tasarım bahçe düzeni", category: "Özel Tasarımlar", location: "Beypazarı, Ankara" },
  { id: 10, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80", alt: "Premium oturma grubu", category: "Oturma Grupları", location: "Çankaya, Ankara" },
  { id: 11, src: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop&q=80", alt: "Özel pergola altı düzeni", category: "Özel Tasarımlar", location: "Kızılcahamam, Ankara" },
  { id: 12, src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80", alt: "Bahçe yemek alanı", category: "Masa Setleri", location: "Altındağ, Ankara" },
]

const categories: GalleryCategory[] = ["Tümü", "Oturma Grupları", "Masa Setleri", "Şezlonglar", "Özel Tasarımlar"]

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Tümü")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "Tümü" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") closeLightbox()
    },
    [prev, next, closeLightbox]
  )

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Referanslar ve Galeri</h1>
          <p className="text-green-200">Tamamladığımız projelerden seçmeler</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow aspect-square focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label={`${item.alt} - büyütmek için tıklayın`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-8 h-8 text-white mb-2" />
                <span className="text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded">{item.location}</span>
              </div>
              <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Galeri lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Kapat"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 p-2 rounded-full"
            aria-label="Önceki"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: "75vh" }}>
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                width={1200}
                height={800}
                className="object-contain w-full max-h-[70vh] rounded-lg"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-white font-semibold">{currentItem.alt}</p>
              <p className="text-gray-400 text-sm">{currentItem.location}</p>
              <p className="text-gray-500 text-xs mt-1">{lightboxIndex !== null ? lightboxIndex + 1 : 0} / {filtered.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 p-2 rounded-full"
            aria-label="Sonraki"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  )
}
