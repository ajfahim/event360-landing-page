import Container from "../shared/Container";
import PlanCard from "../shared/PlanCard";

const plans = [
  {
    name: "Starter Plan",
    price: "11",
    points: [
      "20,000 Visitors",
      "Create Unlimited Widgets",
      "CMS Integration",
      "All Widget Types",
    ],
  },
  {
    name: "Gold Plan",
    price: "36",
    points: [
      "20,000 Visitors",
      "Create Unlimited Widgets",
      "CMS Integration",
      "All Widget Types",
      "Integrations",
    ],
  },
  {
    name: "Pro Plan",
    price: "50",
    points: [
      "20,000 Visitors",
      "Create Unlimited Widgets",
      "CMS Integration",
      "All Widget Types",
      "Integrations",
      "Dedicated Manager",
    ],
  },
];

const GetStartedSection = () => {
  return (
    <div>
      <div className="h-[463px] light-blue-gradient-bg text-center pt-[100px]">
        <div className="text-5xl font-semibold mb-[9px]">
          Ready to get started?
        </div>
        <p>
          14 days unlimited free trial. No contract or credit card required.
        </p>
      </div>
      <div className="bg-[#F9FCFF] pb-[200px]">
        <Container>
          <div className="grid lg:grid-cols-3 place-items-center ">
            {plans.map((plan, index) => (
              <div className=" lg:-mt-40 mb-9 lg:mb-0">
                <PlanCard key={index} {...plan} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GetStartedSection;
