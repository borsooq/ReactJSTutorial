import React from "react";
import PropTypes from "prop-types";

const testing = () => {
  return <div></div>;
};

testing.propTypes = {
  // Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // };
  // Product.defaultProps = {
  //   name: "default name",
  //   price: 3.99,
  //   image: { url: defaultImage },
  // };
};

export default testing;
