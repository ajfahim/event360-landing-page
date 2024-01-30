import checkMarkImg from "@/assets/images/checkMark.png";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { Button } from "../ui/button";

type CardInfo = {
  img: string;
  title: string;
  description: string;
  points: string[];
};

const ServiceCard: FC<CardInfo> = (cardInfo) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full rounded !max-w-[412px] bg-[#5A01CB] hover:bg-[#5A01CB26] p-[25px] bg-opacity-5"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered ? (
          <>
            <motion.p
              className="text-left text-[#566B84]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              {cardInfo.description}
            </motion.p>
          </>
        ) : (
          <motion.img
            src={cardInfo.img}
            alt={cardInfo.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <h4 className="mt-6 mb-3 text-left text-3xl font-bold">
        {cardInfo.title}
      </h4>
      <ul className="text-left text-wrap text-lg mb-[48px]">
        {cardInfo.points.map((info, index) => (
          <div className="flex gap-[18px]" key={index}>
            <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
            <li>{info}</li>
          </div>
        ))}
      </ul>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="mb-9"
        >
          <Button>Check it out</Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
