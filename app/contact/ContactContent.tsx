"use client"

import type React from "react"
import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const LeafletMap = dynamic(() => import("../components/LeafletMap"), { ssr: false })

type FormData = {
  name: string
  email: string
  phone: string
  message: string
  website: string // honeypot
}

type Status = "idle" | "loading" | "success" | "error"

const ContactContent = () => {
  const address = "Ostim OSB Mahallesi, 100. Yıl Bulvarı No: 45, Yenimahalle / Ankara"
  const lat = 39.975
  const lng = 32.745

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  })

  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          website: formData.website,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Bir hata oluştu.")
      }

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "", website: "" })
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Mesaj gönderilemedi. Lütfen tekrar deneyin.")
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">İletişim</h1>
          <p className="text-green-200">Sorularınız için bize ulaşın, size yardımcı olmaktan memnuniyet duyarız.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Contact Info */}
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-3">İletişim Bilgilerimiz</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Adres</p>
                  <p className="text-gray-600 text-sm mt-0.5">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a href="tel:+903123845678" className="text-gray-600 text-sm hover:text-green-700 transition-colors mt-0.5 block">
                    (0312) 384 56 78
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">E-posta</p>
                  <a href="mailto:info@ornekisdekor.com" className="text-gray-600 text-sm hover:text-green-700 transition-colors mt-0.5 block">
                    info@ornekisdekor.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Çalışma Saatleri</p>
                  <p className="text-gray-600 text-sm mt-0.5">Pazartesi – Cumartesi: 09:00 – 18:00</p>
                  <p className="text-gray-600 text-sm">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-3">Bize Mesaj Gönderin</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mesajınız İletildi!</h3>
                <p className="text-gray-600 mb-6">En kısa sürede size dönüş yapacağız.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                {status === "error" && (
                  <div className="flex items-start gap-2 bg-red-50 text-red-700 p-3 rounded-md text-sm">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" />
                </div>

                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-green-700 text-white py-2.5 rounded-md font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                  {status === "loading" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Mesaj Gönder</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white shadow-sm rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-3">Konumumuz</h2>
          <div className="h-64 md:h-96 rounded-lg overflow-hidden">
            <LeafletMap address={address} lat={lat} lng={lng} />
          </div>
          <div className="mt-3 flex justify-end">
            <Link href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`}
              target="_blank" rel="noopener noreferrer"
              className="text-green-600 hover:underline text-sm flex items-center gap-1">
              <MapPin size={14} /> Tam Ekran Haritada Gör
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
