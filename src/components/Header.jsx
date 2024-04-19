import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";
import Tukala from "./Tukala";
import Biduaya from "./Biduaya";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.5, ease: easeInOut },
            }}
            className="absolute top-0 left-0 bg-primary z-10 overflow-hidden"
          >
            <Tukala />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "100%",
              transition: { duration: 0.5, ease: easeInOut },
            }}
            className="absolute bottom-0 left-0 bg-primary z-10 overflow-hidden"
          >
            <Biduaya />
            <button
              onClick={toggleVisibility}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 p-20 z-20"
            >
              fleche vers le bas wai
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Header;
