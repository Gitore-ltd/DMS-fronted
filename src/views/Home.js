
import React from "react";
import Navbar from "../components/Navbar";
import ProductBox from "../components/ProductBox";
import "../assets/styles/containers/Home.css";
import Img from "../assets/images/avatar.png";
import cement from "../assets/images/cement.png";
import cimerwa from "../assets/images/cimerwa.jpg";
import hammer from "../assets/images/hammer.jpeg";

function Home() {
  const profile = {
    image: "",
    username: "n-one",
  };

  const products = [
   {
    image : cimerwa,
    title: 'CEMENT RWANDA',
    price: '12, 000 RWF / SAC'
   },
   {
    image: cement,
    title: 'PANTS',
    price: '12, 000 RWF / SAC'
   },
   {
    image: hammer,
    title: 'RWANDA',
    price: '12, 000 RWF / SAC'
   },
   {
    image: Img,
    title: 'CEMENT',
    price: '12, 000 RWF / SAC'
   },
   {
    image : cimerwa,
    title: 'CEMENT RWANDA',
    price: '12, 000 RWF / SAC'
   },
   {
    image: cement,
    title: 'PANTS',
    price: '12, 000 RWF / SAC'
   }
  ];
  return (
    <div>
      <Navbar profile={profile} />
      <div className="content">
        <div className="search-box">
          <input type="input" placeholder="Type here to search product" />
        </div>
        <div className="products-list row">
          {products.length > 0 ? products.map(product => (
            <ProductBox key={product.title} product={product} />
          )) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;