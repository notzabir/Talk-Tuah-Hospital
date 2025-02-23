"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Phone } from "lucide-react"
import dynamic from "next/dynamic"

const texasCities = [
  "Dallas",
  "Houston",
  "San Antonio",
  "Austin",
  "Fort Worth",
  "El Paso",
  "Arlington",
  "Corpus Christi",
  "Plano",
  "Lubbock",
]

type Hospital = {
  id: number
  name: string
  address: string
  hours: string
  distance: string
  website?: string
  googleMapsUrl: string
  phoneNumber: string
}

export function NearbyHospitals() {
  const [selectedCity, setSelectedCity] = useState("Dallas")
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [loading, setLoading] = useState(false)

  // Dynamic import of Map component
  const Map = dynamic(() => import("./Map"), { ssr: false })

  useEffect(() => {
    fetchHospitals(selectedCity)
  }, [selectedCity])

  const fetchHospitals = async (city: string) => {
    setLoading(true)
    const mockFetchHospitals = (city: string): Promise<Hospital[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockHospitals: Hospital[] = [
            {
              id: 1,
              name: `${city} General Hospital`,
              address: `123 Main St, ${city}, TX`,
              hours: "Open 24 hours",
              distance: `${(Math.random() * 20 + 1).toFixed(1)} miles from UT Dallas`,
              website: `https://www.${city.toLowerCase()}generalhospital.com`,
              googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(`${city} General Hospital`)}`,
              phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
            },
            {
              id: 2,
              name: `${city} Medical Center`,
              address: `456 Oak Ave, ${city}, TX`,
              hours: "Open 24 hours",
              distance: `${(Math.random() * 20 + 1).toFixed(1)} miles from UT Dallas`,
              website: `https://www.${city.toLowerCase()}medicalcenter.org`,
              googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(`${city} Medical Center`)}`,
              phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
            },
            {
              id: 3,
              name: `${city} Children's Hospital`,
              address: `789 Elm St, ${city}, TX`,
              hours: "Open 24 hours",
              distance: `${(Math.random() * 20 + 1).toFixed(1)} miles from UT Dallas`,
              googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(`${city} Children's Hospital`)}`,
              phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
            },
            {
              id: 4,
              name: `${city} Heart Institute`,
              address: `101 Cardio Ln, ${city}, TX`,
              hours: "Open 24 hours",
              distance: `${(Math.random() * 20 + 1).toFixed(1)} miles from UT Dallas`,
              website: `https://www.${city.toLowerCase()}heartinstitute.com`,
              googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(`${city} Heart Institute`)}`,
              phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
            },
            {
              id: 5,
              name: `${city} Emergency Care Center`,
              address: `911 Urgent St, ${city}, TX`,
              hours: "Open 24 hours",
              distance: `${(Math.random() * 20 + 1).toFixed(1)} miles from UT Dallas`,
              googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(`${city} Emergency Care Center`)}`,
              phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
            },
          ]
          resolve(mockHospitals)
        }, 1000)
      })
    }

    try {
      const data = await mockFetchHospitals(city)
      setHospitals(data)
    } catch (error) {
      console.error("Error fetching hospitals:", error)
      setHospitals([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Nearby Hospitals in Texas</h2>
        <Select onValueChange={setSelectedCity} defaultValue={selectedCity}>
          <SelectTrigger className="w-[180px] bgblue-800 text-white z-30 relative">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent className="z-40 relative">
            {texasCities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mb-6 relative z-10">
        <Map city={selectedCity} />
      </div>

      {/* Hospitals List Section */}
      {loading ? (
        <div className="text-center">Loading hospitals...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.id}>
              <CardHeader>
                <CardTitle className="text-lg">{hospital.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-2">{hospital.address}</p>
                <p className="text-sm text-green-400 mb-2">{hospital.hours}</p>
                <p className="text-sm text-blue-400 mb-2">{hospital.distance}</p>
                <p className="text-sm text-gray-400 mb-4">
                  <Phone className="w-4 h-4 inline mr-2" />
                  {hospital.phoneNumber}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hospital.website && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={hospital.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild>
                    <a href={hospital.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Map
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
