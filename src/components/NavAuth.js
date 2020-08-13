import React from 'react';
import '../assets/styles/components/navAuth.css';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';
// import Languages from './Languages';

const NavAuth = () => {
  return (
    <div className="nav ">
      {/* <Languages /> */}
      <Link to="/">
        <h3 className="text-center pt-2 li">
          <img className="logo_Auth" src={logo} />
        </h3>
      </Link>
      <ul className="nav-link">
        <Link to="/signup">
        <li className="li" id="signUpBtn">Sign Up</li>
        </Link>
        <Link to="/login">
          <li className="li">Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavAuth;
