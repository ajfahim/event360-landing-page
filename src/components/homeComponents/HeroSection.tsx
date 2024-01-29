import HeroImage from "@/assets/images/HeroImage.png";
import { motion } from "framer-motion";

const heroStaggerAnimationVariation = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.3 },
  },
};
const HeroSection = () => {
  return (
    <div className="w-full my-16 text-center">
      <motion.div
        variants={heroStaggerAnimationVariation}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={heroStaggerAnimationVariation} className="mb-2">
          Brand New event Packages
        </motion.h2>
        <motion.h3
          variants={heroStaggerAnimationVariation}
          className="gradient-text font-bold text-5xl mb-3"
        >
          For Winter
        </motion.h3>
        <motion.p
          variants={heroStaggerAnimationVariation}
          className="text-lg mb-10"
        >
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. <br /> Ultrices faucibus neque velit risus ac id
          lorem.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <img src={HeroImage} alt="Hero Image" className="w-full" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
