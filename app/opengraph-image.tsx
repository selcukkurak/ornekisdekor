import { ImageResponse } from "next/og"
import BrandMark from "./components/BrandMark"

export const alt = "Örnek İş Dekor — Ahşap ve Bahçe Mobilyaları"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#1e5e3b", color: "white" }}>
      <BrandMark />
      <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 32 }}>ÖRNEK İŞ DEKOR</div>
      <div style={{ display: "flex", fontSize: 28, color: "#f4e8cb", marginTop: 20 }}>AHŞAP &amp; BAHÇE MOBİLYALARI</div>
      <div style={{ display: "flex", fontSize: 22, color: "#f4e8cb", marginTop: 28 }}>SİTELER · ANKARA</div>
    </div>,
    size,
  )
}