import React from "react";

const ProductBox = ({ product }) => {
  return (
    <div className="product cl-md-3">
      <img src={product.productImage} alt="" />
      <div>
        <h5>{product.title}</h5>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductBox;
