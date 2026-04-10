import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Layout from "./components/layout"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ornekisdekor.com"),
  title: {
    default: "Örnek İş Dekor - Ankara Bahçe Mobilyaları | Kaliteli Dış Mekan Mobilyaları",
    template: "%s | Örnek İş Dekor",
  },
  description:
    "Ankara Ostim'de 20 yılı aşkın deneyimle alüminyum, ahşap ve rattan bahçe mobilyaları. Özel tasarım ve ücretsiz montaj ile hayalinizdeki bahçeyi yaratıyoruz.",
  keywords: [
    "bahçe mobilyası",
    "bahçe mobilyaları",
    "bahçe mobilyası Ankara",
    "Ankara bahçe mobilyası",
    "dış mekan mobilyaları",
    "balkon mobilyaları",
    "alüminyum bahçe mobilyası",
    "rattan bahçe mobilyası",
    "özel tasarım bahçe mobilyası",
  ],
  authors: [{ name: "Örnek İş Dekor" }],
  creator: "Örnek İş Dekor",
  publisher: "Örnek İş Dekor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.ornekisdekor.com",
    siteName: "Örnek İş Dekor",
    title: "Örnek İş Dekor - Ankara Bahçe Mobilyaları",
    description:
      "Ankara Ostim'de 20 yılı aşkın deneyimle alüminyum, ahşap ve rattan bahçe mobilyaları. Özel tasarım ve ücretsiz montaj.",
    images: [
      {
        url: "https://www.ornekisdekor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Örnek İş Dekor - Ankara Bahçe Mobilyaları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ornekisdekor",
    creator: "@ornekisdekor",
    title: "Örnek İş Dekor - Ankara Bahçe Mobilyaları",
    description:
      "Ankara Ostim'de 20 yılı aşkın deneyimle alüminyum, ahşap ve rattan bahçe mobilyaları.",
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
  alternates: {
    canonical: "https://www.ornekisdekor.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Örnek İş Dekor",
  description:
    "Ankara Ostim'de 20 yılı aşkın deneyimle alüminyum, ahşap ve rattan bahçe mobilyaları üretimi ve satışı.",
  url: "https://www.ornekisdekor.com",
  telephone: "+90-312-384-56-78",
  email: "info@ornekisdekor.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ostim OSB Mahallesi, 100. Yıl Bulvarı No: 45",
    addressLocality: "Yenimahalle",
    addressRegion: "Ankara",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.975,
    longitude: 32.745,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₺₺",
  image: "https://www.ornekisdekor.com/og-image.jpg",
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
