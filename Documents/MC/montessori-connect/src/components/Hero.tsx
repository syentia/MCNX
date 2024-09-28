import { Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Uniting the Global Montessori Community</h1>
        <p className="mb-8">Discover schools, connect with educators, access resources, and find training centers for Montessori education worldwide.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/find-school" passHref>
            <Button as="a" color="primary" variant="solid">
              Find a Montessori School
            </Button>
          </Link>
          <Button color="primary" variant="solid">
            Find a Montessori Job
          </Button>
          <Button color="primary" variant="solid">
            Find a Montessori Educator
          </Button>
          <Button color="primary" variant="solid">
            Find a Training Center
          </Button>
        </div>
      </div>
    </section>
  );
}
