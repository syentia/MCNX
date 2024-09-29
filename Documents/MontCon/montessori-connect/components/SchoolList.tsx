import { School } from '@/types/school'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

interface SchoolListProps {
  schools: School[]
}

export default function SchoolList({ schools }: SchoolListProps) {
  return (
    <div className="space-y-4">
      {schools.map(school => (
        <div key={school.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg">{school.name}</h3>
          <p className="text-sm text-gray-600">{school.address}</p>
          <p className="text-sm text-gray-600">{school.phone}</p>
          {school.isHiring && (
            <p className="text-sm text-green-600 font-semibold">Hiring</p>
          )}
          <Link href={`/school/${school.id}`} passHref>
            <Button size="sm" color="primary" className="mt-2">
              View Profile
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
