import Image from 'next/image';

const instagramPosts = [
  '/path-to-instagram-image-1.jpg',
  '/path-to-instagram-image-2.jpg',
  '/path-to-instagram-image-3.jpg',
  '/path-to-instagram-image-4.jpg',
];

export default function InstagramFeed() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">MC ON INSTAGRAM</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div key={index} className="aspect-square">
              <Image src={post} alt={`Instagram post ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-blue-600">@montessoriconnect</p>
        </div>
      </div>
    </section>
  );
}
