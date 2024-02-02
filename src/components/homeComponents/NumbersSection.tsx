import Container from "../shared/Container";
import Counter from "../shared/Counter";

const NumbersSection = () => {
  return (
    <div className="w-full light-blue-gradient-bg">
      <Container className="py-[200px] text-center">
        <h2 className="mb-[58px]">Our results in numbers</h2>
        <div className="flex flex-wrap gap-x-40 items-center justify-center ">
          <div>
            <p className="font-semibold text-7xl gradient-text">
              <Counter value={20} />
              <span className="text-[#5A01CB]">K</span>
            </p>
            <p className="text-[#656565] font-bold">Customers Served</p>
          </div>
          <div>
            <p className="font-semibold text-7xl gradient-text">
              <Counter value={95} />
              <span className="text-[#5A01CB]">%</span>
            </p>
            <p className="text-[#656565] font-bold">Customer Satisfaction</p>
          </div>
          <div>
            <p className="font-semibold text-7xl gradient-text">
              <Counter value={12} />
              <span className="text-[#5A01CB]">K</span>
            </p>
            <p className="text-[#656565] font-bold">Events Organized</p>
          </div>
          <div>
            <p className="font-semibold text-7xl gradient-text">
              <Counter value={8} />
              <span className="text-[#5A01CB]">K</span>
            </p>
            <p className="text-[#656565] font-bold">Seminars Organized</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NumbersSection;
