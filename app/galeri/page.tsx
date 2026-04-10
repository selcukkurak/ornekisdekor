import type { Metadata } from "next"
import GalleryContent from "./GalleryContent"

export const metadata: Metadata = {
  title: "Referanslar ve Galeri - Bahçe Mobilyası Projeleri",
  description:
    "Ankara ve çevresinde tamamladığımız bahçe mobilyası projelerinden seçmeler. Alüminyum, ahşap ve rattan mobilya referanslarımızı inceleyin.",
}

export default function GalleriPage() {
  return <GalleryContent />
}
