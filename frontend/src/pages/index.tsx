import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
}
