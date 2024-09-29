'use client'

import { useState } from 'react'
import { Button, Input } from "@nextui-org/react"
import dynamic from 'next/dynamic'
import SchoolList from '@/components/SchoolList'
import { WhyMontessori } from '@/components/WhyMontessori'
import { BecomeMember } from '@/components/BecomeMember'
import InstagramFeed from '@/components/InstagramFeed'
import { Newsletter } from '@/components/Newsletter'
import { School } from '@/types/school'

const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

const sampleSchools: School[] = [
  {
    id: 1,
    name: "The Family School",
    address: "123 Main St, Dallas, TX 75001",
    phone: "(214) 555-1234",
    isHiring: true,
    coordinates: [-96.7970, 32.7767],
  },
  {
    id: 2,
    name: "The Calhoun School",
    address: "456 Elm St, Dallas, TX 75002",
    phone: "(214) 555-5678",
    isHiring: false,
    coordinates: [-96.8067, 32.7831],
  },
  // Add more sample schools as needed
]

export default function FindSchool() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSchools, setFilteredSchools] = useState(sampleSchools)
  const [mapCenter, setMapCenter] = useState<[number, number]>([-96.7970, 32.7767]) // Default to Dallas
  const [mapZoom, setMapZoom] = useState(10)

  const handleSearch = async () => {
    if (!searchQuery) return

    try {
      const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
      const response = await fetch(geocodingUrl)
      const data = await response.json()

      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center
        setMapCenter([lng, lat])
        setMapZoom(12)

        // Filter schools within a certain radius (e.g., 50km)
        const filtered = sampleSchools.filter(school => {
          const distance = calculateDistance(lat, lng, school.coordinates[1], school.coordinates[0])
          return distance <= 50 // 50km radius
        })
        setFilteredSchools(filtered)
      } else {
        console.log('No results found')
        setFilteredSchools([])
      }
    } catch (error) {
      console.error('Error during geocoding:', error)
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Find a School</h1>
          <p className="mb-8">Discover Montessori schools in your area and research their offerings to find the ones that are the best fit for your family.</p>
          <div className="flex mb-8">
            <Input
              placeholder="Enter city, country, or zip code"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button color="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div className="flex h-[600px]">
            <div className="w-2/3 mr-4">
              <MapWithNoSSR schools={filteredSchools} center={mapCenter} zoom={mapZoom} />
            </div>
            <div className="w-1/3 overflow-y-auto">
              <SchoolList schools={filteredSchools} />
            </div>
          </div>
        </div>
      </section>

      <WhyMontessori />
      <BecomeMember />
      <InstagramFeed />
      <Newsletter />
    </main>
  )
}

// Helper function to calculate distance between two points using the Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}