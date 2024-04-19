import { motion } from "framer-motion";
import pic1 from "../assets/7F89025C-5235-4168-B0E0-94D460F99C58.png";
import pic2 from "../assets/8D0CBC60-D4E7-4FCF-9071-DC4598FCD0B7.png";
import pic3 from "../assets/AC084C36-8B2F-4229-9F46-9DC3D01EBC9A.png";

const Gallery = () => {
  const images = [pic1, pic2, pic3];
  return (
      <div className="h-screen bg-background snap-y snap-mandatory overflow-y-scroll">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              "h-screen w-screen grid place-items-center sticky top-0 snap-center"
            }
          >
            <motion.img
              src={image}
              className={`z-${
                index * 10
              }  aspect-[3/4] object-cover h-96 rounded-sm shadow-md`}
            />
          </div>
        ))}
      </div>
  );
};

export default Gallery;
