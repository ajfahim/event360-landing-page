import explotionIcon from "@/assets/images/Explosion.png";
import PartyIcon from "@/assets/images/Party.png";
import checkMarkImg from "@/assets/images/checkMark.png";
import galleryImage1 from "@/assets/images/gallery1.png";
import galleryImage10 from "@/assets/images/gallery10.png";
import galleryImage2 from "@/assets/images/gallery2.png";
import galleryImage3 from "@/assets/images/gallery3.png";
import galleryImage4 from "@/assets/images/gallery4.png";
import galleryImage5 from "@/assets/images/gallery5.png";
import galleryImage6 from "@/assets/images/gallery6.png";
import galleryImage7 from "@/assets/images/gallery7.png";
import galleryImage8 from "@/assets/images/gallery8.png";
import galleryImage9 from "@/assets/images/gallery9.png";
import { motion } from "framer-motion";
import Container from "../shared/Container";

const GallerySection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between mb-[160px] md:space-x-[120px]">
      <div className="flex items-center justify-center max-w-[512px] relative">
        <img
          className="absolute top-0 -right-36 hidden md:block"
          src={PartyIcon}
          alt=""
        />
        <div>
          <h2>Gallery</h2>
          <p className="my-[35px] text-[#566B84]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-[18px]">
              <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
              <span>One day pas access all lecture</span>
            </li>
            <li className="flex gap-[18px]">
              <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
              <span>Lunch and Snack</span>
            </li>
            <li className="flex gap-[18px]">
              <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
              <span>Meet Event Speaker</span>
            </li>
            <li className="flex gap-[18px]">
              <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
              <span>Front Seat</span>
            </li>
            <li className="flex gap-[18px]">
              <img className="size-5" src={checkMarkImg} alt="checkMarkIcon" />
              <span>One day pas access all lecture</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-12 md:grid-rows-12 relative">
        <img
          className="absolute -bottom-36 right-0 hidden md:block"
          src={explotionIcon}
          alt=""
        />
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4 md:row-start-2"
        >
          <img className="w-full h-full" src={galleryImage1} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4 md:row-start-1"
        >
          <img className="w-full h-full" src={galleryImage2} alt="" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4 md:row-start-1"
        >
          <img className="w-full h-full" src={galleryImage3} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4 md:row-start-2"
        >
          <img className="w-full h-full" src={galleryImage4} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage5} alt="" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage6} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage7} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage8} alt="" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage9} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          className="lg:col-span-3 md:row-span-4"
        >
          <img className="w-full h-full" src={galleryImage10} alt="" />
        </motion.div>
      </div>
    </Container>
  );
};

export default GallerySection;
