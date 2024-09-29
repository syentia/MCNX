'use client'

import { useState } from 'react'
import { UserRegistration } from '@/components/UserRegistration'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleRegistration = async (userData: any) => {
    try {
      // Here you would typically send the userData to your backend API
      // For now, we'll just simulate a successful registration
      console.log('User registered:', userData)
      
      // Redirect to the appropriate dashboard based on user type
      switch (userData.userType) {
        case 'parent':
          router.push('/dashboard/parent')
          break
        case 'educator':
          router.push('/dashboard/educator')
          break
        case 'school_admin':
          router.push('/dashboard/school-admin')
          break
        case 'training_center_admin':
          router.push('/dashboard/training-center-admin')
          break
        default:
          router.push('/dashboard')
      }
    } catch (err) {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register for MontessoriConnect</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <UserRegistration onSubmit={handleRegistration} />
      </div>
    </main>
  )
}
