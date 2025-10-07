import { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
  _id: string;
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-xl">{booking.name}</h2>
              <p>Email: {booking.email}</p>
              <p>Guests: {booking.guests}</p>
              <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p>
                Check-out: {new Date(booking.checkOut).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
