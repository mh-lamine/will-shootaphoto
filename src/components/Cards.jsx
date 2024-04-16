import PropTypes from "prop-types";

const Cards = ({ pics }) => {
  return (
    <div className="grid grid-cols-2 p-5">
      {pics.map((pic, index) => (
        <img
          key={index}
          src={pic}
          className={`shadow-xl rounded-sm w-72 ${
            index % 2 === 0
              ? "translate-x-8 -rotate-3"
              : "-translate-x-4 rotate-6"
          }`}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  pics: PropTypes.array.isRequired,
};

export default Cards;
