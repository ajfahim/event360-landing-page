import EventItemsSection from "@/components/homeComponents/EventItemsSection";
import GallerySection from "@/components/homeComponents/GallerySection";
import HeroSection from "@/components/homeComponents/HeroSection";
import OurServicesSection from "@/components/homeComponents/OurServicesSection";
import Container from "@/components/shared/Container";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <OurServicesSection />
      <EventItemsSection />
      <GallerySection />
    </Container>
  );
};

export default Home;
