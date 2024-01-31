import { FC } from "react";

type eventCardProps = {
  img: string;
  title: string;
  organization: string;
};

const EventCard: FC<eventCardProps> = (event) => {
  return (
    <div className="bg-[#0000000D] w-full max-w-[266px] rounded-[6px]">
      <img
        className="w-full object-contain rounded-t-[6px]"
        src={event.img}
        alt={`image_${event.title}`}
      />
      <div className="p-4 text-left">
        <h6 className="">{event.title}</h6>
        <p className="text-[#475569] text-sm">by {event.organization}</p>
      </div>
    </div>
  );
};

export default EventCard;
