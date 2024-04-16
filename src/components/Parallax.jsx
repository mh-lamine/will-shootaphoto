import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useParallax from "../hooks/useParallax";
import PropTypes from "prop-types";

const Parallax = ({ id, image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="relative flex items-center justify-center h-screen snap-center">
      <div ref={ref}>
        <img
          src={image}
          className="w-72 rounded-sm overflow-hidden shadow-lg"
        />
      </div>
      <motion.h2
        style={{ y }}
        className="absolute text-4xl tracking-widest mix-blend-exclusion"
      >{`#00${id + 1}`}</motion.h2>
    </section>
  );
};

Parallax.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Parallax;
