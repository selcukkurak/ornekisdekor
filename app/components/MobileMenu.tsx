"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-green-700 transition-colors"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-800 shadow-xl z-50 border-t border-green-700">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link href="/" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/ozel-tasarim" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  Özel Tasarım
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md transition-colors font-medium" onClick={close}>
                  İletişim
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-green-700">
              <a href="tel:+903123845678" className="flex items-center gap-2 text-green-200 text-sm">
                <Phone size={14} />
                <span>(0312) 384 56 78</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
