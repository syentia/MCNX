'use client'

import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import Link from 'next/link'

export default function ParentDashboard() {
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the user data from your backend
    // For now, we'll use mock data
    setUserData({
      name: 'John Doe',
      email: 'john@example.com',
      savedSchools: ['School A', 'School B'],
      recentSearches: ['Dallas, TX', 'Austin, TX']
    })
  }, [])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {userData.name}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Saved Schools</h2>
        <ul className="list-disc pl-5">
          {userData.savedSchools.map((school: string, index: number) => (
            <li key={index}>{school}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Searches</h2>
        <ul className="list-disc pl-5">
          {userData.recentSearches.map((search: string, index: number) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </section>

      <Link href="/find-school" passHref>
        <Button color="primary">Find More Schools</Button>
      </Link>
    </main>
  )
}
