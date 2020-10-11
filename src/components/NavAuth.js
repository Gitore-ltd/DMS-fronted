import React from 'react';
import '../assets/styles/components/navAuth.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/mainlogo.png';

const NavAuth = () => {
  return (
    <div className="nav">
      <div className="navLeft">
        <img className="landingPageLogo" src={logo} alt="landingPageLogo" />
      </div>
      <div className="navRight">
        <div className="navRightContent">
        <ul className="nav-link">
        <Link to="/signup">
        <li className="landingSignupbtn">Sign Up</li>
        </Link>
         <Link to="/login">
          <li className="landingLoginbtn">Login</li>
        </Link> 
        </ul>
    </div>
    </div>
    </div>
  );
};

export default NavAuth;
