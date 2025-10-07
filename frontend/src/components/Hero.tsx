export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/images/resort-hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Paradise Resort</h1>
        <p className="text-xl md:text-2xl mb-6">
          Relax, Explore, and Rejuvenate
        </p>
        <a
          href="#booking"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
