import { motion } from "framer-motion";
import logo from "../assets/profil_pic.jpeg";

const Tukala = () => {
  return (
    <div className="h-[50vh] w-screen flex items-end justify-center">
      <motion.span
        initial={{
          x: -500,
        }}
        animate={{
          x: -11.5,
          transition: { duration: 0.6 },
        }}
        className="w-full border-t border-t-secondary "
      ></motion.span>
      <h1 className="uppercase font-mono tracking-wider text-center text-4xl font-bold opacity-25 px-4">
        Tukala
      </h1>
      <div className="absolute w-20 translate-y-1/2 mix-blend-overlay -z-10 overflow-hidden">
        <img src={logo} className="rounded-full" />
      </div>
      <motion.span
        initial={{
          x: 500,
        }}
        animate={{
          x: 11.5,
          transition: { duration: 0.6 },
        }}
        className="w-full border-t border-t-secondary "
      ></motion.span>
    </div>
  );
};

export default Tukala;
