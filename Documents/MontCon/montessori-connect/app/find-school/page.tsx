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

  const handleSearch = () => {
    // In a real application, you would fetch schools based on the search query
    // For now, we'll just filter the sample data
    const filtered = sampleSchools.filter(school => 
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.address.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredSchools(filtered)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Find a School</h1>
          <p className="mb-8">Discover Montessori schools in your area and research their offerings to find the ones that are the best fit for your family.</p>
          <div className="flex mb-8">
            <Input
              placeholder="Enter address or school name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button color="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div className="flex">
            <div className="w-2/3 mr-4">
              <MapWithNoSSR schools={filteredSchools} />
            </div>
            <div className="w-1/3">
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