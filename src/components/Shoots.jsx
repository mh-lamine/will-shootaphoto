import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Shoots = ({ images, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-screen bg-background snap-y snap-mandatory overflow-y-scroll snap-center"
    >
      <div className="fixed inset-0 opacity-15 bg-secondary "></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={
            "h-screen w-screen grid place-items-center sticky top-0 snap-center z-10"
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
  bg: PropTypes.string.isRequired,
};

export default Shoots;
