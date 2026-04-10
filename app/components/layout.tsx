import type React from "react"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-green-900 text-green-100 text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+903123845678" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={13} />
              <span>(0312) 384 56 78</span>
            </a>
            <a href="mailto:info@ornekisdekor.com" className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail size={13} />
              <span>info@ornekisdekor.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-green-200">
            <MapPin size={13} />
            <span>Ostim OSB, Ankara</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-green-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight">Örnek İş Dekor</span>
            <span className="text-green-300 text-xs font-medium tracking-wider hidden md:block">BAHÇE MOBİLYALARI</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="/" className="hover:text-green-200 transition-colors font-medium">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-200 transition-colors font-medium">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-green-200 transition-colors font-medium">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/ozel-tasarim" className="hover:text-green-200 transition-colors font-medium">
                  Özel Tasarım
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-200 transition-colors font-medium">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition-colors font-medium"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-green-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand column */}
            <div>
              <h2 className="text-xl font-bold mb-3">Örnek İş Dekor</h2>
              <p className="text-green-300 text-sm leading-relaxed mb-4">
                Ankara&apos;nın köklü bahçe mobilyası markası. 20 yılı aşkın deneyimle alüminyum, ahşap ve rattan mobilyalarda kaliteli çözümler.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-green-300">
                <li><Link href="/products" className="hover:text-white transition-colors text-sm">Ürünler</Link></li>
                <li><Link href="/galeri" className="hover:text-white transition-colors text-sm">Galeri</Link></li>
                <li><Link href="/ozel-tasarim" className="hover:text-white transition-colors text-sm">Özel Tasarım</Link></li>
                <li><Link href="/bahce-mobilyasi-ankara" className="hover:text-white transition-colors text-sm">Ankara Bahçe Mobilyası</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors text-sm">Hakkımızda</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors text-sm">İletişim</Link></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">İletişim</h3>
              <div className="space-y-3 text-green-300 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-green-400" />
                  <span>Ostim OSB Mahallesi, 100. Yıl Bulvarı No: 45, Yenimahalle / Ankara</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="flex-shrink-0 text-green-400" />
                  <a href="tel:+903123845678" className="hover:text-white transition-colors">(0312) 384 56 78</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="flex-shrink-0 text-green-400" />
                  <a href="mailto:info@ornekisdekor.com" className="hover:text-white transition-colors">info@ornekisdekor.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-6 text-center text-green-400 text-sm">
            <p>&copy; 2025 Örnek İş Dekor. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
