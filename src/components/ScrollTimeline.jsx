import { motion, useScroll } from "framer-motion";

const ScrollTimeline = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 h-2 bg-accent bottom-12"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollTimeline;
