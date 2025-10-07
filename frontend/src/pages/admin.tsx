import { useEffect, useState } from "react";
import axios from "../utils/api";

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then(res => setBookings(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Bookings</h1>
      <table className="table-auto border">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th>
            <th>Check-In</th><th>Check-Out</th><th>Guests</th><th>Service</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b: any) => (
            <tr key={b._id}>
              <td>{b.name}</td><td>{b.email}</td><td>{b.phone}</td>
              <td>{new Date(b.checkIn).toLocaleDateString()}</td>
              <td>{new Date(b.checkOut).toLocaleDateString()}</td>
              <td>{b.guests}</td><td>{b.serviceType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
