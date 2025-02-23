"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from 'leaflet'

// Fix Leaflet default icon issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const cityCoordinates: { [key: string]: [number, number] } = {
  "Dallas": [32.7767, -96.7970],
  "Houston": [29.7604, -95.3698],
  "San Antonio": [29.4241, -98.4936],
  "Austin": [30.2672, -97.7431],
  "Fort Worth": [32.7555, -97.3308],
  "El Paso": [31.7619, -106.4850],
  "Arlington": [32.7357, -97.1081],
  "Corpus Christi": [27.8006, -97.3964],
  "Plano": [33.0198, -96.6989],
  "Lubbock": [33.5779, -101.8552]
}

interface MapProps {
  city: string;
}

export default function Map({ city }: MapProps) {
  const coordinates = cityCoordinates[city] || cityCoordinates["Dallas"]
  
  return (
    <MapContainer center={coordinates} zoom={12} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  )
} 