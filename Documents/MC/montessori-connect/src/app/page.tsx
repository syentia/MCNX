import Header from '../components/Header'
import Hero from '../components/Hero'
import dynamic from 'next/dynamic'

const DynamicWorldMap = dynamic(() => import('../components/WorldMap'), {
  ssr: false
})

import Statistics from '../components/Statistics'
import UserRoles from '../components/UserRoles'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <DynamicWorldMap />
      <Statistics />
      <UserRoles />
    </main>
  )
}
