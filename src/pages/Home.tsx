import EventItemsSection from "@/components/homeComponents/EventItemsSection";
import GallerySection from "@/components/homeComponents/GallerySection";
import GetStartedSection from "@/components/homeComponents/GetStartedSection";
import HeroSection from "@/components/homeComponents/HeroSection";
import MapSection from "@/components/homeComponents/MapSection";
import NumbersSection from "@/components/homeComponents/NumbersSection";
import OurServicesSection from "@/components/homeComponents/OurServicesSection";
import RecentEventsSection from "@/components/homeComponents/RecentEventsSection";
import TestimonialSection from "@/components/homeComponents/TestimonialSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <EventItemsSection />
      <GallerySection />
      <GetStartedSection />
      <TestimonialSection />
      <RecentEventsSection />
      <NumbersSection />
      <MapSection />
    </>
  );
};

export default Home;
