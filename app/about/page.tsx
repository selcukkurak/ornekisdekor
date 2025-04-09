import type { Metadata } from "next"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "Hakkımızda - Bahçe Mobilyaları Uzmanınız",
  description:
    "Ornek Is Dekor, yılların deneyimiyle bahçe mobilyaları alanında lider bir markadır. Kalitemiz, özgün tasarımlarımız ve müşteri memnuniyetine verdiğimiz önem ile tanınıyoruz.",
  openGraph: {
    title: "Ornek Is Dekor Hakkında - Bahçe Mobilyaları Uzmanınız",
    description:
      "Yılların deneyimiyle bahçe mobilyaları alanında lider markayız. Kalitemiz, özgün tasarımlarımız ve müşteri memnuniyetine verdiğimiz önem ile tanınıyoruz.",
    images: [
      {
        url: "https://www.ornekisdekor.com/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ornek Is Dekor Hakkında",
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
