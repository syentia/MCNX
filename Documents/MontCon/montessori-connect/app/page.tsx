import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">MontessoriConnect</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <Button color="primary" variant="solid">
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      <section className="bg-blue-900 text-white py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Uniting the Global Montessori Community</h1>
        <p className="mb-8">Discover, Connect, and Collaborate with Montessori Educators Worldwide</p>
        <div className="space-x-4">
          <Button color="primary" variant="solid">
            Join Now
          </Button>
          <Button color="primary" variant="bordered">
            Learn More
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex mb-8">
            <Link href="/find-school" className="flex-1">
              <button className="w-full bg-blue-600 text-white py-2 px-4 text-sm font-semibold">
                Find A Montessori School
              </button>
            </Link>
            <button className="flex-1 bg-blue-700 text-white py-2 px-4 text-sm font-semibold">
              Find a Montessori Job
            </button>
            <button className="flex-1 bg-blue-800 text-white py-2 px-4 text-sm font-semibold">
              Find A Montessori Educator
            </button>
            <button className="flex-1 bg-blue-900 text-white py-2 px-4 text-sm font-semibold">
              Find A Montessori Training Center
            </button>
          </div>
          <Image
            src="/world-map.png"
            alt="World Map"
            width={800}
            height={400}
            className="mb-8"
          />
          <div className="flex justify-between text-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">16,769</h2>
              <p>Members</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900">1287</h2>
              <p>Schools</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900">1287</h2>
              <p>Resources Shared</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-bold mb-2">Forums</h3>
              <p>Engage in discussions with peers</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Events</h3>
              <p>Attend virtual and in-person events</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Resources</h3>
              <p>Access and share Montessori materials</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Courses</h3>
              <p>Enhance your skills with online courses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Add 4 resource cards here */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <div className="w-1/2">
            <Image
              src="/classroom-image.jpg"
              alt="Montessori Classroom"
              width={400}
              height={300}
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-2xl font-bold mb-4">Building Future Leaders: Social Skills in the Montessori Classroom</h2>
            <p className="mb-4">Learn how Montessori education fosters essential social skills and leadership qualities in children.</p>
            <Button color="primary" variant="solid">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Community Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Add 4 community post cards here */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get Regular Updates from MontessoriConnect</h2>
          <p className="mb-8">Stay informed about the latest resources, events, and community discussions</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg"
            />
            <Button color="primary" className="rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Add footer content here */}
        </div>
      </footer>
    </main>
  );
}