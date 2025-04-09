import type React from "react"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Ornek Is Dekor</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-green-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">&copy; 2025 Ornek Is Dekor. Tüm hakları saklıdır.</p>
          <p className="text-sm md:text-base mt-2">Adres: Örnek Mahallesi, Mobilya Caddesi No: 123, İstanbul</p>
          <p className="text-sm md:text-base">Telefon: (0212) 345 67 89 | E-posta: info@ornekisdekor.com</p>
        </div>
      </footer>
    </div>
  )
}
