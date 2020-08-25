import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductBox from "../../components/ProductBox";
import "./Home.css";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productActions";
import Spinner from "../../components/Spinner/Spinner";

function Home(props) {
  useEffect(() => {
    async function fetchProducts() {
      await props.getProducts(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthZ29yb3JhbWF4aW1lQGdtYWlsLmNvbSIsImlhdCI6MTU5ODAwNjI5OH0.mgKJFmP3AZm1DDdjUXx29GyA0lrulX9InY5pqFFfHY0"
      );
    }
    fetchProducts();
  }, []);
  const profile = {
    image: "",
    username: "n-one",
  };

  return (
    <div>
      <Navbar profile={profile} />
      <div className="content">
        <div className="search-box">
          <input type="input" placeholder="Type here to search product" />
        </div>
        <div className="products-list row">
          {props.products !== undefined ? (
            props.products.map((product) => (
              <ProductBox key={product.productId} product={product} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  token: state.token,
});
export default connect(mapStateToProps, { getProducts })(Home);
