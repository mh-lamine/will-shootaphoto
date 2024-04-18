import { motion } from "framer-motion";
import logo from "../assets/profil_pic.jpeg";

const Header = () => {
  return (
    <div className="h-screen flex items-center justify-between gap-2 bg-background relative">
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
    </div>
  );
}

export default Header