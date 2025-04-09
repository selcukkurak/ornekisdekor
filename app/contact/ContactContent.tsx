"use client"

import type React from "react"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
})

const ContactContent = () => {
  const address = "Örnek Mahallesi, Mobilya Caddesi No: 123, İstanbul"
  const lat = 41.0082 // İstanbul'un örnek koordinatları
  const lng = 28.9784 // Gerçek konumunuza göre güncelleyin

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Burada gerçek bir form gönderimi yapılabilir
    // Şimdilik sadece simüle ediyoruz
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1500)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">İletişim</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">İletişim Bilgilerimiz</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Adres:</p>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Telefon:</p>
                <p className="text-gray-600">(0212) 345 67 89</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">E-posta:</p>
                <p className="text-gray-600">info@ornekisdekor.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Çalışma Saatleri:</p>
                <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                <p className="text-gray-600">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">Bize Mesaj Gönderin</h2>

          {submitMessage ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">{submitMessage}</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresiniz *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Gönderiliyor..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Konum</h2>
        <div className="h-64 md:h-96 rounded-md overflow-hidden">
          <LeafletMap address={address} lat={lat} lng={lng} />
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline text-sm md:text-base flex items-center"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Tam Ekran Haritada Gör
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
