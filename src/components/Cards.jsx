import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Cards = ({ pics }) => {
  return (
    <div className="flex">
      {pics.map((pic, index) => (
        <motion.img
          key={index}
          src={pic}
          className={"shadow-xl rounded-sm w-1/2 max-h-[300px]"}
          initial={{
            rotate: index % 2 === 0 ? 5 : -5,
            x: index % 2 === 0 ? 150 : -150,
          }}
          animate={{
            x: index % 2 === 0 ? 20 : -20,
            rotate: index % 2 === 0 ? -6 : 6,
            transition: { duration: 1 },
          }}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  pics: PropTypes.array.isRequired,
};

export default Cards;
