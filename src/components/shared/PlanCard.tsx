import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/button";

type plan = {
  name: string;
  price: string;
  points: string[];
};
const PlanCard: FC<plan> = (plan) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "bg-white hover:bg-[#5A01CB] w-full min-w-[371px] py-[44px] px-[50px] rounded-[12.8px] shadow min-h-[587px] relative transition duration-150 ease-in-out",
        isHovered ? "text-white" : ""
      )}
    >
      <h6 className="text-2xl font-semibold mb-2">{plan.name}</h6>
      <p className="mb-[47px]">
        <span className="text-5xl font-bold">${plan.price}</span>
        <span
          className={cn(
            "text-[#656565]  font-semibold",
            isHovered ? "text-white" : ""
          )}
        >
          /month
        </span>
      </p>
      <ul className="space-y-[26px]">
        {plan.points.map((point, index) => (
          <li key={index} className="flex space-x-4">
            <Check
              className={cn("text-[#5A01CB]", isHovered ? "text-white" : "")}
            />

            <span
              className={cn(
                "text-[#454545] font-semibold",
                isHovered ? "text-white" : ""
              )}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "w-[268px] absolute bottom-[25px]",
          isHovered
            ? "text-[#5A01CB] bg-white hover:text-[#5A01CB] hover:bg-white "
            : ""
        )}
      >
        Get this package
      </Button>
    </motion.div>
  );
};

export default PlanCard;
