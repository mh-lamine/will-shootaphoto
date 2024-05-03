import PropTypes from "prop-types";

const ShootingPreview = ({ imgUrl }) => {
  return (
      <img src={imgUrl} className="w-72 object-cover object-center" />
  );
};

ShootingPreview.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ShootingPreview;
