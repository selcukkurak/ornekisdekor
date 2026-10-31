import type React from "react"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { MessageCircle } from "lucide-react"
import { businessContact } from "@/lib/contact"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Örnek İş Dekor ana sayfa" className="shrink-0">
            <Image src="/logo.svg" alt="Örnek İş Dekor" width={440} height={100} priority className="h-auto w-56 md:w-72" />
          </Link>
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
          <Link href="/" className="mb-4 inline-block" aria-label="Örnek İş Dekor ana sayfa">
            <Image src="/logo.svg" alt="Örnek İş Dekor" width={440} height={100} className="h-auto w-64" />
          </Link>
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Ornek Is Dekor. Tüm hakları saklıdır.</p>
          <p className="text-sm md:text-base mt-2">Adres: {businessContact.address}</p>
          <p className="text-sm md:text-base">
            Telefon: <a href={businessContact.phoneHref} className="hover:underline">{businessContact.phone}</a>
          </p>
          <a href={businessContact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 hover:underline">
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </footer>
      <a
        href={businessContact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden mesaj gönder"
        className="fixed bottom-5 right-5 z-[1100] inline-flex items-center gap-2 rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
      >
        <MessageCircle size={28} aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
