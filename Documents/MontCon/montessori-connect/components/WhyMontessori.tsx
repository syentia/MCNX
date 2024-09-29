import Image from 'next/image';
import { Button } from "@nextui-org/react";

const articles = [
  { title: 'Article 1 title goes here', image: '/path-to-image-1.jpg' },
  { title: 'Article 2 title goes here', image: '/path-to-image-2.jpg' },
  { title: 'Article 3 title goes here', image: '/path-to-image-3.jpg' },
  { title: 'Article 4 title goes here', image: '/path-to-image-4.jpg' },
];

export function WhyMontessori() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">WHY MONTESSORI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={article.image} alt={article.title} width={300} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Button color="primary" variant="light">
            See all
          </Button>
        </div>
      </div>
    </section>
  );
}
