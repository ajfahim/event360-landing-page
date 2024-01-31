import Autoplay from "embla-carousel-autoplay";
import Container from "../shared/Container";
import EventCard from "../shared/EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const eventCards = [
  {
    img: "src/assets/images/event1.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event4.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event2.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event3.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event4.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event2.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
  {
    img: "src/assets/images/event3.png",
    title: "Flower Decorations",
    organization: "Melvina Spring",
  },
];
const RecentEventsSection = () => {
  return (
    <Container className="py-[80px] text-center">
      <h2 className="mb-6">Recent Events</h2>
      <p className="text-[#566B84] mb-[80px]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit <br /> risus ac id lorem.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {eventCards.map((card, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <EventCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </Container>
  );
};

export default RecentEventsSection;
