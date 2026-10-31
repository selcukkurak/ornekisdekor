"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { businessContact } from "@/lib/contact"

const ContactContent = () => {
  const address = businessContact.address
  const mapQuery = encodeURIComponent(address)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Merhaba, Örnek İş Dekor ile iletişime geçmek istiyorum.\nAd Soyad: ${formData.name.trim()}${formData.phone.trim() ? `\nTelefon: ${formData.phone.trim()}` : ""}\n\n${formData.message.trim()}`,
    )
    window.location.href = `${businessContact.whatsappHref}?text=${message}`
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
                <a href={businessContact.phoneHref} className="text-gray-600 hover:text-green-700 hover:underline">
                  {businessContact.phone}
                </a>
              </div>
            </div>

            <a
              href={businessContact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp ile İletişime Geç
            </a>

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
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">WhatsApp ile Mesaj Gönderin</h2>

          <p className="text-sm text-gray-600 mb-4">Mesajınız WhatsApp’ta hazır açılır. Gönder düğmesine dokunarak doğrudan bize iletebilirsiniz.</p>
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
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center disabled:opacity-70"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp ile Gönder
              </button>
            </form>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Konum</h2>
        <div className="h-64 md:h-96 rounded-md overflow-hidden">
          <iframe
            title="Örnek İş Dekor konumu"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm md:text-base font-medium text-white hover:bg-green-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            Google Maps’te Aç
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
