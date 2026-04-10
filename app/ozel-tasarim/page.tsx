import type { Metadata } from "next"
import ConfiguratorContent from "./ConfiguratorContent"

export const metadata: Metadata = {
  title: "Özel Tasarım Bahçe Mobilyası - Kişiselleştirilmiş Çözümler",
  description:
    "Bahçeniz için özel tasarım mobilya siparişi verin. Ölçü, malzeme, renk ve kumaş seçenekleriyle kişiselleştirilmiş bahçe mobilyaları.",
}

export default function OzelTasarimPage() {
  return <ConfiguratorContent />
}
