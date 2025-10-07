export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/images/resort-hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">Paradise Resort</h1>
      <p className="text-xl mb-6">Relax, Explore, and Rejuvenate</p>
      <a
        href="#booking"
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-lg font-semibold transition"
      >
        Book Now
      </a>
    </section>
  );
}
