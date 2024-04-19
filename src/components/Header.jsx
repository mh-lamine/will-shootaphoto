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
    <div className="absolute inset-0  flex flex-col justify-center">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ y: 0 }}
              exit={{
                y: "-100%",
                transition: { duration: 0.5, ease: easeInOut },
              }}
              className=" bg-primary z-10"
            >
              <Tukala />
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              exit={{
                y: "100%",
                transition: { duration: 0.5, ease: easeInOut },
              }}
              className=" bg-primary z-10"
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
    </div>
  );
};

export default Header;
