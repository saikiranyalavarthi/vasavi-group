import AboutSection from "./components/AboutSection";
import AmenitiesSection from "./components/AmenitiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectOverview from "./components/ProjectOverview";
import Specifications from "./components/Specifications";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <AmenitiesSection />
      <ProjectOverview />
      <GallerySection />
      <Specifications />
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default App;
