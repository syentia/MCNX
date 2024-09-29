'use client'

import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import Link from 'next/link'

export default function TrainingCenterAdminDashboard() {
  const [centerData, setCenterData] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the training center data from your backend
    setCenterData({
      name: 'Global Montessori Training Center',
      admin: 'Michael Brown',
      email: 'michael@globalmontessori.com',
      currentCourses: ['Primary Diploma', 'Elementary I & II Combined'],
      upcomingCourses: ['Assistants to Infancy']
    })
  }, [])

  if (!centerData) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {centerData.admin}</h1>
      <h2 className="text-2xl mb-4">{centerData.name} Dashboard</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Current Courses</h3>
        <ul className="list-disc pl-5">
          {centerData.currentCourses.map((course: string, index: number) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Upcoming Courses</h3>
        <ul className="list-disc pl-5">
          {centerData.upcomingCourses.map((course: string, index: number) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      <div className="space-x-4">
        <Link href="/manage-courses" passHref>
          <Button color="primary">Manage Courses</Button>
        </Link>
        <Link href="/update-center-profile" passHref>
          <Button color="secondary">Update Center Profile</Button>
        </Link>
      </div>
    </main>
  )
}