'use client'

import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import Link from 'next/link'

export default function EducatorDashboard() {
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the user data from your backend
    setUserData({
      name: 'Jane Smith',
      email: 'jane@example.com',
      certifications: ['AMI Primary', 'AMS Elementary I'],
      savedJobs: ['Montessori School A', 'Montessori School B']
    })
  }, [])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {userData.name}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Certifications</h2>
        <ul className="list-disc pl-5">
          {userData.certifications.map((cert: string, index: number) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saved Job Listings</h2>
        <ul className="list-disc pl-5">
          {userData.savedJobs.map((job: string, index: number) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </section>

      <Link href="/job-listings" passHref>
        <Button color="primary">Browse Job Listings</Button>
      </Link>
    </main>
  )
}