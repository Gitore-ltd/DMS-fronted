import React from 'react';

const ProductBox = ({ product, handleClick }) => (
  <div className="product cl-md-3" onClick={handleClick}>
    <img src={product.productImage} alt="" />
    <div>
      <h5>{product.title}</h5>
      <p>{product.price}</p>
    </div>
  </div>
);

export default ProductBox;
