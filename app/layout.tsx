import type React from "react"
import "./globals.css"
import "leaflet/dist/leaflet.css"
import type { Metadata } from "next"
import Layout from "./components/layout"
import { siteUrl } from "@/lib/site"
import { businessContact } from "@/lib/contact"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Örnek İş Dekor — Ahşap ve Bahçe Mobilyaları Ankara",
    template: "%s | Örnek İş Dekor",
  },
  description:
    "Ankara Siteler’de ahşap vitrin, TV ünitesi, bar takımı ve bahçe mobilyaları. Örnek İş Dekor ürün fotoğraflarını inceleyin, WhatsApp’tan bilgi alın.",
  keywords: ["bahçe mobilyaları", "dış mekan mobilyaları", "bahçe dekorasyonu", "Ornek Is Dekor"],
  authors: [{ name: "Ornek Is Dekor" }],
  creator: "Ornek Is Dekor",
  publisher: "Ornek Is Dekor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Ornek Is Dekor",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Örnek İş Dekor logosu — Ahşap ve Bahçe Mobilyaları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FurnitureStore",
            name: "Örnek İş Dekor",
            url: siteUrl,
            logo: `${siteUrl}/logo.svg`,
            image: `${siteUrl}/opengraph-image`,
            telephone: "+905517311893",
            address: {
              "@type": "PostalAddress",
              streetAddress: businessContact.address,
              addressLocality: "Altındağ",
              addressRegion: "Ankara",
              addressCountry: "TR",
            },
          }).replace(/</g, "\\u003c") }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}


