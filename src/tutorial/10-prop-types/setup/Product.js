import React from "react";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h2>{name}</h2>
      <p>${price || 3.99}</p>
    </article>
  );
};

export default Product;
