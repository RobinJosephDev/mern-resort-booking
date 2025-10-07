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
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 9;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        console.log("Bookings API response:", res.data);
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  // Pagination logic
  const indexOfLast = currentPage * bookingsPerPage;
  const indexOfFirst = indexOfLast - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBookings.map((booking) => (
              <div
                key={booking._id}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-xl">{booking.name}</h2>
                <p>Email: {booking.email}</p>
                <p>Guests: {booking.guests}</p>
                <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
                <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-8 gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
