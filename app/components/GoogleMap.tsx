"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface GoogleMapProps {
  address: string
}

declare global {
  interface Window {
    google: any
  }
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: 41.0082, lng: 28.9784 }, // İstanbul koordinatları (örnek olarak)
      })

      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ address: address }, (results: any, status: any) => {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location)
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          })
        } else {
          console.error("Geocode was not successful for the following reason: " + status)
        }
      })
    }

    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      script.onload = initMap
    } else {
      initMap()
    }
  }, [address])

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
}

export default GoogleMap
