import { motion } from "framer-motion";
import logo from "../assets/profil_pic.jpeg";

const Biduaya = () => {
  return (
    <div className="w-screen flex items-start justify-center overflow-hidden">
      <motion.span
        initial={{
          x: -500,
        }}
        animate={{
          x: 0,
          transition: { duration: 0.6 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.6 },
        }}
        className="w-full border-t border-t-secondary"
      ></motion.span>
      <h1 className="uppercase font-mono tracking-wider text-center text-4xl font-bold opacity-25 px-4">
        Biduaya
      </h1>
      <div className="absolute w-20 overflow-hidden mix-blend-overlay">
        <img src={logo} className="rounded-full -translate-y-1/2" />
      </div>
      <motion.span
        initial={{
          x: 500,
        }}
        animate={{
          x: 0,
          transition: { duration: 0.6 },
        }}
        exit={{
          x: 500,
          transition: { duration: 0.6 },
        }}
        className="w-full border-t border-t-secondary "
      ></motion.span>
    </div>
  );
};

export default Biduaya;
