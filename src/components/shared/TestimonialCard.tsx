import { FC } from "react";

type cardProps = {
  author: string;
  designation: string;
  message: string;
  img: string;
};
const TestimonialCard: FC<cardProps> = (card) => {
  return (
    <div className="text-white bg-[#A1B5CC4D] p-[32px] rounded-[6px] w-full max-w-[348px]">
      <p className="mb-8">{card.message}</p>
      <div className="flex space-x-[16px]">
        <img src={card.img} alt={`image_${card.author}`} />
        <div className="block">
          <p>{card.author} </p>{" "}
          <p className="text-[#8190A6]"> {card.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
