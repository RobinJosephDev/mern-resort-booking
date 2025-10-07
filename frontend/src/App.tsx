// src/App.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Booking Form Section */}
      <BookingForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
