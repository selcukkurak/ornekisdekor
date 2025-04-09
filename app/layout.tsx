import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "./components/layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ornekisdekor.com"),
  title: {
    default: "Ornek Is Dekor - Kaliteli Bahçe Mobilyaları",
    template: "%s | Ornek Is Dekor",
  },
  description:
    "Ornek Is Dekor, kaliteli ve şık bahçe mobilyaları sunan lider bir markadır. Bahçeniz için en iyi mobilyaları keşfedin.",
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
    url: "https://www.ornekisdekor.com",
    siteName: "Ornek Is Dekor",
    images: [
      {
        url: "https://www.ornekisdekor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ornek Is Dekor - Kaliteli Bahçe Mobilyaları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ornekisdekor",
    creator: "@ornekisdekor",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}


import './globals.css'