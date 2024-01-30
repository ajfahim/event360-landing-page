import Container from "../shared/Container";
import ServiceCard from "../shared/ServiceCard";

const cardInfo = [
  {
    img: "/src/assets/images/cardImage1.png",
    title: "Corporate event",
    description:
      "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
    points: [
      "One day pas access all lecture",
      "Lunch and Snack",
      "Meet Event Speaker",
      "Front Seat",
      "One day pas access all lecture",
    ],
  },
  {
    img: "/src/assets/images/cardImage2.png",
    title: "Corporate event",
    description:
      "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
    points: [
      "One day pas access all lecture",
      "Lunch and Snack",
      "Meet Event Speaker",
      "Front Seat",
      "One day pas access all lecture",
    ],
  },
  {
    img: "/src/assets/images/cardImage1.png",
    title: "Corporate event",
    description:
      "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
    points: [
      "One day pas access all lecture",
      "Lunch and Snack",
      "Meet Event Speaker",
      "Front Seat",
      "One day pas access all lecture",
    ],
  },
];

const OurServicesSection = () => {
  return (
    <Container className="w-full text-center mb-[143px]">
      <h2 className="mb-3">Our Services</h2>
      <p className="mb-14 text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices <br /> faucibus neque velit risus ac id lorem.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[20px]">
        {cardInfo.map((card, index) => (
          <ServiceCard key={index} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default OurServicesSection;
