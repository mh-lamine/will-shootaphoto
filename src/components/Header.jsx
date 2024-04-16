import umbrella from "../assets/umbrella.jpg";
import kimono from "../assets/kimono.png";
import Cards from "./Cards";
import kitchen from "../assets/kitchen.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import logo from "../assets/profil_pic.jpeg";
import { motion } from "framer-motion";

const Header = () => {
  // window.onload = () => {
  //   const glitchyWord = document.querySelector("#glitchy-word");
  //   const letters = "abcdefghijklmnopqrstuvwxyz";

  //     let iterations = 0;
  //     const interval = setInterval(() => {
  //       glitchyWord.innerText = glitchyWord.innerText
  //         .split("")
  //         .map((letter, index) => {
  //           if (index < iterations) {
  //             return glitchyWord.dataset.value[index];
  //           }
  //           return letters[Math.floor(Math.random() * 26)];
  //         })
  //         .join("");

  //       if (iterations >= glitchyWord.innerText.length) {
  //         clearInterval(interval);
  //       }
  //       iterations += 1 / 4;
  //     }, 50);
  // }
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 p-2 bg-background snap-center">
      <div className="flex flex-col justify-center p-4 gap-8">
        <Cards pics={[umbrella, kimono]} />
        <p className="text-center">Passion</p>
      </div>
      <div className="flex items-center justify-between w-full gap-2 relative">
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
        <h1 id="glitchyWord" className="uppercase font-mono tracking-wide  text-4xl font-bold opacity-25">
          shoottaphoto
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
      <div className="flex flex-col justify-center p-4 gap-8">
        <p className="text-center">Détermination</p>
        <Cards pics={[kitchen, kitchen2]} />
      </div>
    </div>
  );
};

export default Header;
