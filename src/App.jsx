import HeroSection from "./components/HeroSection";
import bgImage from "./assets/bg-hero.png";
import Navbar from "./components/Navbar.jsx";
import AmenitiesSection from "./components/AmenitiesSection";
import RoomsSection from "./components/RoomsSection";
import MorjanaSection from "./components/MorjanaSection";
import ContactUsSection from "./components/ContactUsSection";
import GallerySection from "./components/GallerySection.jsx";
import AboutUsSection from "./components/AboutUsSection";

export default function App() {
  return (
    <div className="position-relative overflow-hidden">
      {/* heroSection background */}
      <div
        className="position-absolute top-0 start-0 w-100 bg-style"
        style={{
          zIndex: 1,
          height: "15%",
          backgroundColor: "rgba(15, 14, 14, 0.84)",
          backgroundImage: `linear-gradient(to bottom, #232221 0%, rgba(14, 14, 14, 0.83) 10%, rgba(0, 0, 0.2, 0.8) 40%, rgba(0, 0, 0.2, 0.8) 0%,rgba(0, 0, 0, 0.4) 90%, #232221 100%), url(${bgImage})
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="position-relative" style={{ zIndex: 2 }}>
        <Navbar />
        <HeroSection />
        <AmenitiesSection />
        <RoomsSection />
        <MorjanaSection />
        <ContactUsSection />
        <GallerySection />
        <AboutUsSection />
      </div>
    </div>
  );
}
