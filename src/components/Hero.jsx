import { motion, useScroll, useSpring } from "framer-motion";
import Parallax from "./Parallax";
import image1 from "../assets/7F89025C-5235-4168-B0E0-94D460F99C58.png";
import image2 from "../assets/7A84A137-B625-4DC4-8EF6-5E953A5AA1CB.png";
import image3 from "../assets/BC864E08-B041-444E-9019-297C270F6B67.png";
import image4 from "../assets/5D9C9EA8-DC8E-44E5-84BD-56403DE3BF80.png";
import image5 from "../assets/D692B0EF-22EF-4957-913C-39949904966C.png";

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col items-center relative bg-parallax py-2">
      {images.map((image, index) => (
        <Parallax key={index} id={index} image={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};

export default Hero;
