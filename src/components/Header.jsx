import { motion, AnimatePresence, easeInOut } from "framer-motion";
import logo from "../assets/profil_pic.jpeg";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: easeInOut } }}
          className="absolute inset-0 h-screen w-full flex items-center justify-between gap-2 bg-primary z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">
            <img
              src={logo}
              alt="home logo"
              className="w-16 rounded-full shadow-lg"
            />
          </div>
          <motion.span
            initial={{
              x: -500,
            }}
            animate={{
              x: 0,
              transition: { duration: 0.6 },
            }}
            className="w-full border-t-2 border-t-secondary "
          ></motion.span>
          <h1
            id="glitchyWord"
            className="uppercase font-mono tracking-wider text-center text-4xl font-bold opacity-25"
          >
            tukala biduaya
          </h1>
          <motion.span
            initial={{
              x: 500,
            }}
            animate={{
              x: 0,
              transition: { duration: 0.6 },
            }}
            className="w-full border-t-2 border-t-secondary "
          ></motion.span>
          <button
            onClick={toggleVisibility}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 p-20"
          >
            fleche vers le bas wai
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
