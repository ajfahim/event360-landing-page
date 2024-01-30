import EventItemsSection from "@/components/homeComponents/EventItemsSection";
import GallerySection from "@/components/homeComponents/GallerySection";
import HeroSection from "@/components/homeComponents/HeroSection";
import OurServicesSection from "@/components/homeComponents/OurServicesSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <EventItemsSection />
      <GallerySection />
    </>
  );
};

export default Home;
