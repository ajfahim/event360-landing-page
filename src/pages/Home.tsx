import EventItemsSection from "@/components/homeComponents/EventItemsSection";
import GallerySection from "@/components/homeComponents/GallerySection";
import GetStartedSection from "@/components/homeComponents/GetStartedSection";
import HeroSection from "@/components/homeComponents/HeroSection";
import OurServicesSection from "@/components/homeComponents/OurServicesSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <EventItemsSection />
      <GallerySection />
      <GetStartedSection />
    </>
  );
};

export default Home;
