import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/signupPage.css';

const RegLeftSide = () => {
    return(
        <div className="signupLeft">
        <div className="signupCircle"/>
        <div className="signupLeftContent">
        <Link to="/">
        <img  src={logo} alt="DMS logo" />
        </Link>
        <h2>DEBT MANAGMENT SYSTEM</h2>
        <p>This system allows clients to request loans <br /> online and eases the
        process of payment<br /> of those loans.</p>
        </div>
      </div>
    )
};

export default RegLeftSide;

