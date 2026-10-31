import Image from "next/image"
import { MessageCircle, Expand } from "lucide-react"
import { businessContact } from "@/lib/contact"
import type { products } from "@/lib/products"

export default function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <a href={product.image} target="_blank" rel="noopener noreferrer" className="relative block bg-stone-50 p-3" aria-label={`${product.name} fotoğrafını büyüt`}>
        <Image src={product.image} alt={`Örnek İş Dekor ${product.name}`} width={600} height={750} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="h-80 w-full object-contain" />
        <span className="absolute bottom-5 right-5 rounded-full bg-white/90 p-2 text-green-800"><Expand size={18} aria-hidden="true" /></span>
      </a>
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-700">{product.category} · {product.id}</p>
        <h2 className="mb-4 text-lg font-semibold text-stone-900">{product.name}</h2>
        <a href={`${businessContact.whatsappHref}?text=${encodeURIComponent(`Merhaba, ${product.id} kodlu ${product.name} hakkında bilgi almak istiyorum.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp’tan Bilgi Al
        </a>
      </div>
    </article>
  )
}