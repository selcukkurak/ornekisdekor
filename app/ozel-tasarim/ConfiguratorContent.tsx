"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, Loader2, ChevronRight, ChevronLeft } from "lucide-react"

type ProductType = "Oturma Grubu" | "Masa Seti" | "Şezlong" | "Pergola" | "Diğer" | ""
type Material = "Alüminyum" | "Ahşap" | "Rattan" | "Polirattan" | ""
type ColorOption = "Antrasit" | "Beyaz" | "Kahverengi" | "Krem" | "Özel Renk" | ""
type Fabric = "Standart Kumaş" | "Su Geçirmez Kumaş" | "Lüks Kumaş" | "Minder İstemiyorum" | ""

type ConfigData = {
  productType: ProductType
  width: string
  depth: string
  height: string
  material: Material
  color: ColorOption
  fabric: Fabric
}

type ContactData = {
  name: string
  phone: string
  email: string
  notes: string
  website: string // honeypot
}

const colorMap: Record<string, string> = {
  Antrasit: "#374151",
  Beyaz: "#f9fafb",
  Kahverengi: "#92400e",
  Krem: "#fef3c7",
  "Özel Renk": "linear-gradient(135deg, #ef4444, #a855f7, #3b82f6)",
}

const TOTAL_STEPS = 6

export default function ConfiguratorContent() {
  const [step, setStep] = useState(1)
  const [config, setConfig] = useState<ConfigData>({
    productType: "",
    width: "",
    depth: "",
    height: "",
    material: "",
    color: "",
    fabric: "",
  })
  const [contact, setContact] = useState<ContactData>({ name: "", phone: "", email: "", notes: "", website: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const canProceed = () => {
    if (step === 1) return !!config.productType
    if (step === 2) return true // dimensions optional
    if (step === 3) return !!config.material
    if (step === 4) return !!config.color
    if (step === 5) return !!config.fabric
    if (step === 6) return !!contact.name && !!contact.email
    return false
  }

  const handleSubmit = async () => {
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "configurator",
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          message: contact.notes,
          website: contact.website,
          configuratorData: config,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Bir hata oluştu.")
      setStatus("success")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Gönderilemedi. Lütfen tekrar deneyin.")
    }
  }

  const productTypes: ProductType[] = ["Oturma Grubu", "Masa Seti", "Şezlong", "Pergola", "Diğer"]
  const materials: Material[] = ["Alüminyum", "Ahşap", "Rattan", "Polirattan"]
  const colors: ColorOption[] = ["Antrasit", "Beyaz", "Kahverengi", "Krem", "Özel Renk"]
  const fabrics: Fabric[] = ["Standart Kumaş", "Su Geçirmez Kumaş", "Lüks Kumaş", "Minder İstemiyorum"]

  const stepLabels = ["Ürün", "Ölçüler", "Malzeme", "Renk", "Kumaş", "İletişim"]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Özel Tasarım</h1>
          <p className="text-green-200">Hayalinizdeki bahçe mobilyasını birlikte tasarlayalım</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {status === "success" ? (
          <div className="max-w-lg mx-auto text-center bg-white rounded-xl shadow-sm p-10">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Talebiniz Alındı!</h2>
            <p className="text-gray-600 mb-6">Özel tasarım talebinizi aldık. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p>
            <button onClick={() => { setStatus("idle"); setStep(1); setConfig({ productType: "", width: "", depth: "", height: "", material: "", color: "", fabric: "" }); setContact({ name: "", phone: "", email: "", notes: "", website: "" }) }}
              className="text-green-700 font-semibold hover:underline">
              Yeni tasarım başlat
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Configurator */}
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="flex items-center mb-8 overflow-x-auto pb-2">
                {stepLabels.map((label, i) => (
                  <div key={label} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        step > i + 1 ? "bg-green-600 text-white" : step === i + 1 ? "bg-green-700 text-white ring-2 ring-green-300" : "bg-gray-200 text-gray-500"
                      }`}>
                        {step > i + 1 ? "✓" : i + 1}
                      </div>
                      <span className={`text-xs mt-1 font-medium ${step === i + 1 ? "text-green-700" : "text-gray-400"}`}>{label}</span>
                    </div>
                    {i < TOTAL_STEPS - 1 && <div className={`h-0.5 w-8 mx-1 mb-4 ${step > i + 1 ? "bg-green-600" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 min-h-[300px]">
                {/* Step 1: Product Type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Ürün tipini seçin</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {productTypes.map((pt) => (
                        <button key={pt} onClick={() => setConfig((c) => ({ ...c, productType: pt }))}
                          className={`p-4 rounded-xl border-2 font-semibold text-sm transition-all ${config.productType === pt ? "border-green-600 bg-green-50 text-green-800" : "border-gray-200 text-gray-700 hover:border-green-300"}`}>
                          {pt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Dimensions */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Ölçüler (cm)</h2>
                    <p className="text-gray-500 text-sm mb-6">Belirtmek istemiyorsanız boş bırakabilirsiniz.</p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Genişlik", key: "width" },
                        { label: "Derinlik", key: "depth" },
                        { label: "Yükseklik", key: "height" },
                      ].map(({ label, key }) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                          <input type="number" min="0" placeholder="cm"
                            value={config[key as keyof ConfigData]}
                            onChange={(e) => setConfig((c) => ({ ...c, [key]: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Material */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Malzeme seçin</h2>
                    <div className="space-y-3">
                      {materials.map((m) => (
                        <label key={m} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${config.material === m ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-green-300"}`}>
                          <input type="radio" name="material" value={m} checked={config.material === m}
                            onChange={() => setConfig((c) => ({ ...c, material: m }))} className="text-green-600" />
                          <span className="font-semibold text-gray-800">{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Color */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Renk seçin</h2>
                    <div className="flex flex-wrap gap-4">
                      {colors.map((c) => (
                        <button key={c} onClick={() => setConfig((cfg) => ({ ...cfg, color: c }))}
                          className="flex flex-col items-center gap-2 focus:outline-none">
                          <div className={`w-12 h-12 rounded-full border-4 transition-all ${config.color === c ? "border-green-600 scale-110" : "border-transparent hover:border-gray-300"}`}
                            style={{ background: colorMap[c] }} />
                          <span className={`text-xs font-medium ${config.color === c ? "text-green-700" : "text-gray-600"}`}>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Fabric */}
                {step === 5 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Minder kumaşı seçin</h2>
                    <div className="space-y-3">
                      {fabrics.map((f) => (
                        <label key={f} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${config.fabric === f ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-green-300"}`}>
                          <input type="radio" name="fabric" value={f} checked={config.fabric === f}
                            onChange={() => setConfig((c) => ({ ...c, fabric: f }))} className="text-green-600" />
                          <span className="font-semibold text-gray-800">{f}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 6: Contact */}
                {step === 6 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">İletişim bilgileriniz</h2>
                    {/* Honeypot */}
                    <input type="text" name="website" value={contact.website} onChange={(e) => setContact((c) => ({ ...c, website: e.target.value }))} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    {status === "error" && (
                      <div className="flex items-start gap-2 bg-red-50 text-red-700 p-3 rounded-md text-sm mb-4">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                        <input type="text" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input type="tel" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
                        <input type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ek Notlar</label>
                        <textarea value={contact.notes} onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))} rows={3}
                          placeholder="Tasarımınızla ilgili eklemek istediğiniz notlar..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
                  <button onClick={() => setStep((s) => s - 1)} disabled={step === 1}
                    className="flex items-center gap-1 px-4 py-2 text-gray-600 font-semibold hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <ChevronLeft size={18} /> Geri
                  </button>
                  {step < TOTAL_STEPS ? (
                    <button onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}
                      className="flex items-center gap-1 bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                      İleri <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} disabled={!canProceed() || status === "loading"}
                      className="flex items-center gap-2 bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                      {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</> : "Tasarımı Gönder"}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Live Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-5 sticky top-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Özet</h3>
                <div className="space-y-3 text-sm">
                  <SummaryRow label="Ürün Tipi" value={config.productType || "—"} />
                  <SummaryRow label="Genişlik" value={config.width ? `${config.width} cm` : "—"} />
                  <SummaryRow label="Derinlik" value={config.depth ? `${config.depth} cm` : "—"} />
                  <SummaryRow label="Yükseklik" value={config.height ? `${config.height} cm` : "—"} />
                  <SummaryRow label="Malzeme" value={config.material || "—"} />
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 font-medium">Renk</span>
                    <div className="flex items-center gap-2">
                      {config.color && (
                        <span className="w-4 h-4 rounded-full border border-gray-300 inline-block" style={{ background: colorMap[config.color] }} />
                      )}
                      <span className="text-gray-900 font-semibold">{config.color || "—"}</span>
                    </div>
                  </div>
                  <SummaryRow label="Kumaş" value={config.fabric || "—"} />
                </div>
                {step > 1 && (
                  <div className="mt-5 p-3 bg-green-50 rounded-lg text-center">
                    <p className="text-xs text-green-700 font-medium">Tüm adımları tamamladıktan sonra talebinizi gönderebilirsiniz.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold">{value}</span>
    </div>
  )
}
