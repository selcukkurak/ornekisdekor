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

      const popup = document.createElement("span")
      popup.textContent = address
      L.circleMarker([lat, lng], {
        radius: 10,
        color: "#1e5e3b",
        fillColor: "#2e8b57",
        fillOpacity: 1,
      }).addTo(map).bindPopup(popup).openPopup()

      // Haritayı yeniden boyutlandır
      const resizeTimer = setTimeout(() => {
        map.invalidateSize()
      }, 0)

      return () => {
        clearTimeout(resizeTimer)
        map.remove()
      }
    }
  }, [address, lat, lng])

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
}

export default LeafletMap
