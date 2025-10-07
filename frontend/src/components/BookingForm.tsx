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
      await axios.post("http://localhost:5000/api/bookings", form);
      setMessage("Booking successful!");
    } catch (err) {
      setMessage("Booking failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
      />
      <input
        type="number"
        min={1}
        onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) })}
      />
      <select
        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
      >
        <option>Accommodation</option>
        <option>Adventure</option>
        <option>Wellness</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Book Now
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
