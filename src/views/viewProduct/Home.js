/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import NavbarSeller from '../../components/SellerNavBar';
import ProductBox from '../../components/ProductBox';
import './Home.css';
import {
  getProducts,
  updateSelectedProduct,
} from '../../store/actions/productActions';
import Spinner from '../../components/Spinner/Spinner';

const Home = (props) => {
  const [userRole, setUserRole] = useState('');
  const [term, setTerm] = useState('');

  useEffect(() => {
    const x = qs.parse(props.location.search.replace('?', ''));
    async function fetchProducts() {
      await props.getProducts(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthZ29yb3JhbWF4aW1lQGdtYWlsLmNvbSIsImlhdCI6MTU5ODAwNjI5OH0.mgKJFmP3AZm1DDdjUXx29GyA0lrulX9InY5pqFFfHY0'
      );
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchUserProfile() {
      // const dateOfB = moment(userProfile.dateOfBirth).format('YYYY-MM-DD');
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/getProfile`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        }
      );
      const user = await res.json();
      setUserRole(user.user.role);
    }
    fetchUserProfile();
  }, []);

  const profile = {
    image: '',
    username: 'n-one',
  };

  const handleClick = (product) => {
    props.updateSelectedProduct(product);

    props.history.push({
      pathname: '/viewoneproduct',
      search: qs.stringify(product),
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const searchFor = (keyWord) => (user) =>
  user.title.toLowerCase().includes(keyWord.toLowerCase()) ||
  !keyWord;

  return (
    <div>
      {/* <Navbar profile={profile} /> */}
      {userRole === 'seller' ? <NavbarSeller /> : <Navbar profile={profile} />}
      <div className="content">
        <div className="search-box">
          <form>
            <div className="input-group">
              <input
                type="text"
                id='homeSearchBtn'
                className="form-control"
                placeholder="enter product name"
                name="search"
                onChange={handleSearch} 
              />
              <i className="fa fa-search" id='homeSearchIcon'></i>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="products-list row">
          {props.products !== undefined ? (
            props.products.filter(searchFor(term)).map((product) => (
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
export default connect(mapStateToProps, { getProducts, updateSelectedProduct })(
  Home
);
