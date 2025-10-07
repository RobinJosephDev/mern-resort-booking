import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    serviceType: "Accommodation",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, form);
      setMessage("Booking successful!");
      setForm({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        serviceType: "Accommodation",
      });
    } catch (err) {
      setMessage("Booking failed! Please try again.");
    }
  };

  return (
    <section
      id="booking"
      className="max-w-2xl mx-auto my-16 p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          required
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          required
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <div className="flex gap-4">
          <input
            type="date"
            value={form.checkIn}
            required
            className="border rounded p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
          />
          <input
            type="date"
            value={form.checkOut}
            required
            className="border rounded p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
          />
        </div>
        <input
          type="number"
          min={1}
          value={form.guests}
          required
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) =>
            setForm({ ...form, guests: parseInt(e.target.value) })
          }
        />
        <select
          value={form.serviceType}
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
        >
          <option>Accommodation</option>
          <option>Adventure</option>
          <option>Wellness</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
        >
          Book Now
        </button>
        {message && (
          <p className="text-center mt-2 text-green-600">{message}</p>
        )}
      </form>
    </section>
  );
}
