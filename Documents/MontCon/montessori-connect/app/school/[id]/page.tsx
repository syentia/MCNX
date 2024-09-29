import Image from 'next/image'
import { Button } from "@nextui-org/react"

// This would typically come from an API or database
const schoolData = {
  id: 1,
  name: "The Family School",
  logo: "/path-to-logo.png",
  isMember: true,
  isHiring: true,
  about: "The Family Schools offer Montessori education for children 18 months to 12 years old. We focus on fostering independence, critical thinking, and creativity through hands-on learning. We emphasize language and cultural diversity, individualized curricula, and mixed-age classrooms. Our teachers guide students in a nurturing, stimulating environment that combines work and play, promoting self-motivation and joyous learning.",
  facts: {
    ageRange: "18 months - 12 years",
    type: "Private",
    numberOfStudents: 75,
    openPeriod: "September - June",
    summerProgram: "Yes"
  },
  programs: [
    "Toddler",
    "Pre-Primary",
    "Elementary",
    "Recess Program",
    "Extended Day",
    "Summer camp"
  ]
}

export default function SchoolProfile({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the school data based on the id
  const school = schoolData

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl font-bold">MontessoriConnect</div>
          {/* Add navigation items here */}
        </nav>
      </header>

      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Image
              src={school.logo}
              alt={`${school.name} logo`}
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold">{school.name}</h1>
              <div className="flex space-x-2 mt-2">
                {school.isMember && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Member</span>
                )}
                {school.isHiring && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hiring</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">ABOUT</h2>
            <p>{school.about}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">FACTS</h2>
              <ul className="space-y-2">
                <li>Ages: {school.facts.ageRange}</li>
                <li>Type: {school.facts.type}</li>
                <li>Number of Students: {school.facts.numberOfStudents}</li>
                <li>Open: {school.facts.openPeriod}</li>
                <li>Summer Program: {school.facts.summerProgram}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">PROGRAM</h2>
              <ul className="space-y-2">
                {school.programs.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Unlock content with a free account</h2>
          <p className="mb-8">Access school's full profile, ask parents for review, receive latest updates</p>
          <Button color="primary" size="lg">
            CREATE AN ACCOUNT
          </Button>
        </div>
      </section>

      {/* Add more sections for Activities, Philosophy, etc. */}

      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Add footer content */}
        </div>
      </footer>
    </main>
  )
}
