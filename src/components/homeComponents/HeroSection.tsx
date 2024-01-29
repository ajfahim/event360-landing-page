import HeroImage from "@/assets/images/HeroImage.png";

const HeroSection = () => {
  return (
    <div className="w-full my-16 text-center">
      <h2 className="text-6xl font-bold mb-2">Brand New event Packages</h2>
      <h3 className="gradient-text font-bold text-5xl mb-3">For Winter</h3>
      <p className="text-lg mb-10">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. <br /> Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <img src={HeroImage} alt="Hero Image" className="w-full" />
    </div>
  );
};

export default HeroSection;
