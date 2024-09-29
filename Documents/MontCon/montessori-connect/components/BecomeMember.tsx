import { Button } from "@nextui-org/react";

const benefits = [
  "Post jobs and attract the best educators and students",
  "Find the right training and expand your skills",
  "Reach and attract potential students to your program",
  "Access unique perks and benefits",
];

export function BecomeMember() {
  return (
    <section className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">BECOME A MEMBER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-white p-4 rounded-lg">
              <p>{benefit}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <Button color="primary" variant="solid">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
