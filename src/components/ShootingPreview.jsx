import PropTypes from "prop-types";

const ShootingPreview = ({ imgUrl }) => {
  return (
      <img src={imgUrl} draggable="false" className="w-72 object-cover object-center dragg" />
  );
};

ShootingPreview.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ShootingPreview;
