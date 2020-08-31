/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import ProductBox from '../../components/ProductBox';
import './Home.css';
import { getProducts, updateSelectedProduct } from '../../store/actions/productActions';
import Spinner from '../../components/Spinner/Spinner';

const Home = (props) => {
  useEffect(() => {
    async function fetchProducts() {
      await props.getProducts(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthZ29yb3JhbWF4aW1lQGdtYWlsLmNvbSIsImlhdCI6MTU5ODAwNjI5OH0.mgKJFmP3AZm1DDdjUXx29GyA0lrulX9InY5pqFFfHY0'
      );
    }
    fetchProducts();
  }, []);
  const profile = {
    image: '',
    username: 'n-one',
  };

  const handleClick = (product) => {

    props.updateSelectedProduct(product);

    props.history.push({
      pathname: '/viewoneproduct',
      search: qs.stringify(product)
    });
  };

  return (
    <div>
      <Navbar profile={profile} />
      <div className="content">
        <div className="search-box">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="products-list row">
          {props.products !== undefined ? (
            props.products.map((product) => (
              <ProductBox
                key={product.productId}
                product={product}
                handleClick={() => handleClick(product)}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  token: state.token,
});
export default connect(mapStateToProps, { getProducts, updateSelectedProduct })(Home);
