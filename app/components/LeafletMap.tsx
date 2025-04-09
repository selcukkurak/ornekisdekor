"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import L from "leaflet"

interface LeafletMapProps {
  address: string
  lat: number
  lng: number
}

const LeafletMap: React.FC<LeafletMapProps> = ({ address, lat, lng }) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current) {
      const map = L.map(mapRef.current).setView([lat, lng], 13)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([lat, lng]).addTo(map).bindPopup(address).openPopup()

      // Haritayı yeniden boyutlandır
      setTimeout(() => {
        map.invalidateSize()
      }, 0)
    }
  }, [address, lat, lng])

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
}

export default LeafletMap
