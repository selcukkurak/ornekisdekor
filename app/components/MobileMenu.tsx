"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div id="mobile-navigation" className="absolute z-[1000] top-16 left-0 right-0 bg-green-800 p-4">
          <nav>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
