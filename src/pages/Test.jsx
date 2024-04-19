import { motion, AnimatePresence } from "framer-motion";
import Gallery from "./Gallery";

const Test = () => {
  
  return (
    <div className="bg-background">
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="h-screen bg-primary flex flex-col items-center justify-center absolute inset-0 z-10"
          >
            <div>front</div>
            <div>door</div>
            <button
              onClick={toggleVisibility}
              className="absolute bottom-0 rounded-lg px-10 py-3 my-5 text-xl bg-accent text-primary"
            >
              enter
            </button>
          </motion.header>
        )}
      </AnimatePresence>
      <Gallery />
    </div>
  );
};

export default Test;
