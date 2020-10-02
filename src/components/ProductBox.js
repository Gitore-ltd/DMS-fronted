import React from 'react';

const ProductBox = ({ product, handleClick }) => (
  <div className="product cl-md-3" onClick={handleClick}>
    <div className="productImgHolder">
      <img src={product.productImage} alt="" />
    </div>
      <div className="product_info">
        <h5>{product.title}</h5>
        <p id="productDescription">{product.description}</p>
        <div className="addressHolder">
          {/* <i class="fa fa-map-marker-alt"></i> */}
          <i className="fa fa-map-marker"></i>
          <h8>{product.address}</h8>
        </div>
        <div className="priceHolder">
          <i class="fa fa-tag"></i>
          {/* <h8>
          {product.price.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}{' '}
        </h8> */}
          <span class="value">
            <span class="amount">
              <h8>
                {product.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{' '}
              </h8>
            </span>
            <span class="unitHolder">FRW / {product.unit}</span>
          </span>
        </div>
      </div>
  </div>
);

export default ProductBox;
