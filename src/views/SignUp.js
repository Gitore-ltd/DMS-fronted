import React from 'react';
import '../assets/styles/containers/signupPage.css';
import { Link } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import LineDivider from '../components/lineDivider.js';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const SignUp = () => {
    return(
      <div className="signupContainer">
                {/* <Form> */}
        <div className="signupLeft">
          <div className="signupCircle"/>
          <div className="signupLeftContent">
          <Link to="/">
          <img  src={logo} />
          </Link>
          <h2>DEBT MANAGMENT SYSTEM</h2>
          <p>This system allows clients to request loans <br /> online and eases the
          process of payment<br /> of those loans.</p>
          </div>
        </div>
        <div className="signupRight">
          <div className="signupRightContent">
            <h1>Sign Up</h1>
            <div className="signupSocials">
              <span className="signupGmail"><FcGoogle className="GmailIcon"/>Sign Up with Gmail</span>
              <span className="signupFacebook"><FaFacebookF className="facebookIcon"/>Sign Up with Gmail</span>
            </div>
            <LineDivider />
            <div className="signupInputs">
              <input className="signupEmailInput" placeholder="Email"></input>
              <input className="signupEmailInput" type="password" placeholder="Password"></input>
              <input className="signupEmailInput"type="password" placeholder="Confirm password"></input>
            </div>
            <button className="signupPagebtn">Sign Up</button>
            <p className="signupToLoginLink">have an account? 
            <Link to="/login">
            <a>Login</a>
            </Link>
            </p>
          </div>
        </div>
        {/* </Form> */}
      </div>
    )
}

export default SignUp;