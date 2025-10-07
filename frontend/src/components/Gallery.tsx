export default function Gallery() {
  const images = [
    "/images/resort1.jpg",
    "/images/resort2.jpg",
    "/images/resort3.jpg",
    "/images/resort4.jpg",
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded shadow hover:scale-105 transform transition"
          >
            <img
              src={img}
              alt={`Resort ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
