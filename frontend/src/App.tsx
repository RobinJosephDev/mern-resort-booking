// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import AdminBookings from "./pages/AdminBookings"; // new admin page

function App() {
  return (
    <div className="App font-sans">
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Gallery />
              <BookingForm />
              <Footer />
            </>
          }
        />

        {/* Admin page */}
        <Route path="/admin" element={<AdminBookings />} />
      </Routes>
    </div>
  );
}

export default App;
