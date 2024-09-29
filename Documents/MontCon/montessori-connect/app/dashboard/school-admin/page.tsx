'use client'

import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import Link from 'next/link'

export default function SchoolAdminDashboard() {
  const [schoolData, setSchoolData] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the school data from your backend
    setSchoolData({
      name: 'Sunshine Montessori School',
      admin: 'Sarah Johnson',
      email: 'sarah@sunshinemontessori.com',
      openPositions: ['Primary Guide', 'Elementary Assistant'],
      enrollmentStats: { current: 85, capacity: 100 }
    })
  }, [])

  if (!schoolData) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {schoolData.admin}</h1>
      <h2 className="text-2xl mb-4">{schoolData.name} Dashboard</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
        <ul className="list-disc pl-5">
          {schoolData.openPositions.map((position: string, index: number) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Enrollment Statistics</h3>
        <p>Current Enrollment: {schoolData.enrollmentStats.current}</p>
        <p>Capacity: {schoolData.enrollmentStats.capacity}</p>
      </section>

      <div className="space-x-4">
        <Link href="/post-job" passHref>
          <Button color="primary">Post New Job</Button>
        </Link>
        <Link href="/update-school-profile" passHref>
          <Button color="secondary">Update School Profile</Button>
        </Link>
      </div>
    </main>
  )
}