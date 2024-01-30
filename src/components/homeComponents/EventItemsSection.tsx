import eventImage1 from "@/assets/images/eventImage1.png";
import eventImage2 from "@/assets/images/eventImage2.png";
import eventImage3 from "@/assets/images/eventImage3.png";
import eventImage4 from "@/assets/images/eventImage4.png";
import eventImage5 from "@/assets/images/eventImage5.png";
const EventItemsSection = () => {
  return (
    <div className="text-center mb-[124px]">
      {/* <img
        className="absolute -top-[300px] -left-[400px] !overflow-hidden"
        src={eventItemGreenBg}
        alt=""
      />
      <img
        className="absolute -bottom-[600px] -right-[310px] !overflow-hidden"
        src={eventItemPinkBg}
        alt=""
      /> */}
      <h2>Event Items</h2>
      <p className="text-[#566B84] mb-14">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices <br /> faucibus neque velit risus ac id lorem.
      </p>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-6 bg-[#6E8CF933] p-6 rounded-[6px]">
          <img className="w-full mb-3" src={eventImage1} alt="event image 1" />
          <p className="text-2xl font-medium text-left">Event Item - 1</p>
        </div>
        <div className="col-span-6 bg-[#F96EC233] p-6 rounded-[6px]">
          <img className="w-full mb-3" src={eventImage2} alt="event image 2" />
          <p className="text-2xl font-medium text-left">Event Item - 2</p>
        </div>
        <div className="col-span-4 bg-[#F9B16E33] p-6 rounded-[6px]">
          <img className="w-full mb-3" src={eventImage3} alt="event image 3" />
          <p className="text-2xl font-medium text-left">Event Item - 3</p>
        </div>
        <div className="col-span-4 bg-[#6EE9F933] p-6 rounded-[6px]">
          <img className="w-full mb-3" src={eventImage4} alt="event image 4" />
          <p className="text-2xl font-medium text-left">Event Item - 4</p>
        </div>
        <div className="col-span-4 bg-[#81F96E33] p-6 rounded-[6px]">
          <img className="w-full mb-3" src={eventImage5} alt="event image 5" />
          <p className="text-2xl font-medium text-left">Event Item - 5</p>
        </div>
      </div>
    </div>
  );
};

export default EventItemsSection;
