export default function Services() {
  const services = [
    { title: "Accommodation", desc: "Luxury rooms and villas", icon: "🏨" },
    {
      title: "Adventure Activities",
      desc: "Hiking, rafting, and more",
      icon: "🚵",
    },
    { title: "Wellness & Spa", desc: "Relax your mind and body", icon: "💆" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
