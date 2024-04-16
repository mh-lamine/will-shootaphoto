import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useParallax from "../hooks/useParallax";
import PropTypes from "prop-types";

const Parallax = ({ id, image }) => {
    console.log(image)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={image} className="w-60" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
};

Parallax.propTypes = {
    id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Parallax;
