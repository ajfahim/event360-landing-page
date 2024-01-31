import Autoplay from "embla-carousel-autoplay";
import Container from "../shared/Container";
import TestimonialCard from "../shared/TestimonialCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const testimonialCard = [
  {
    author: "Hellen Jummy",
    designation: "Financial Counselor",
    message:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    img: "/src/assets/images/testimonial1.png",
  },
  {
    author: "Ralph Edwards",
    designation: "Math Teacher",
    message:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    img: "/src/assets/images/testimonial2.png",
  },
  {
    author: "Hellena John",
    designation: "Psychology Student",
    message:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    img: "/src/assets/images/testimonial3.png",
  },
  {
    author: "Baker Bhai",
    designation: "Power Platform Expert",
    message:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    img: "/src/assets/images/testimonial1.png",
  },
  {
    author: "Amit Rohan",
    designation: "UX/UI Designer",
    message:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    img: "/src/assets/images/testimonial3.png",
  },
];
const TestimonialSection = () => {
  return (
    <div className="dark-blue-gradient-bg w-full">
      <Container className="py-[80px]">
        <h2 className="text-white mb-[80px]">What everyone says</h2>
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
            {testimonialCard.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default TestimonialSection;
