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
    <div className="fixed overflow-y-hidden z-10">
      <AnimatePresence>
        {isVisible && (
          <div className="h-screen flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: 0 }}
              exit={{
                y: "-100%",
                transition: { duration: 0.5, delay: 0.3, ease: easeInOut },
              }}
              className="h-full bg-primary z-10"
            >
              <Tukala />
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              exit={{
                y: "100%",
                transition: { duration: 0.5, delay: 0.3, ease: easeInOut },
              }}
              className="h-full bg-primary z-10"
            >
              <Biduaya />
              <button
                onClick={toggleVisibility}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 p-20 z-20"
              >
                <motion.i
                  initial={{
                    y: 0,
                  }}
                  animate={{
                    y: 50,
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: easeInOut,
                    },
                  }}
                  exit={{
                    y: 200,
                    transition: { duration: 0.5, ease: easeInOut },
                  }}
                  className="fa-solid fa-angles-down text-background text-3xl"
                ></motion.i>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
