import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Shoots = ({ images }) => {
  return (
    <div className="h-screen bg-background snap-y snap-mandatory overflow-y-scroll snap-center">
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

Shoots.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Shoots;
