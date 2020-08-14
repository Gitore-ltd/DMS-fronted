import React from "react";
import Img from "../assets/images/avatar.png";

const ProductBox = ({ product }) => {
  const { image, title, price } = product;
  console.log(image);
  return (
    <div className="product cl-md-3">
      <img src={image} alt="" />
      <div>
        <h5>{title}</h5>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductBox;