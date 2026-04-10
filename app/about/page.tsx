import type { Metadata } from "next"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "Hakkımızda - Ankara'nın Bahçe Mobilyası Uzmanı",
  description:
    "Örnek İş Dekor, Ankara Ostim'de 20 yılı aşkın deneyimle kaliteli bahçe mobilyaları üretiyor. Firmamızı, değerlerimizi ve ekibimizi tanıyın.",
  openGraph: {
    title: "Hakkımızda | Örnek İş Dekor",
    description:
      "Ankara Ostim'de 20 yılı aşkın deneyimle kaliteli bahçe mobilyaları üretiyor ve satıyoruz.",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
