import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/loginPage.css';
import { Form, Spinner } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import LineDivider from '../components/lineDivider.js';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
    return(
      <div className="loginContainer">
                {/* <Form> */}
        <div className="loginLeft">
          <div className="loginCircle"/>
          <div className="loginLeftContent">
          <Link to="/">
          <img  src={logo} />
          </Link>
          <h2>DEBT MANAGMENT SYSTEM</h2>
          <p>This system allows clients to request loans <br /> online and eases the
          process of payment<br /> of those loans.</p>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginRightContent">
            <h1>Login</h1>
            <div className="loginSocials">
              <span className="loginGmail"><FcGoogle className="GmailIcon"/>Login with Gmail</span>
              <span className="loginFacebook"><FaFacebookF className="facebookIcon"/>Login with Gmail</span>
            </div>
            <LineDivider />
            <div className="loginInputs">
              <input className="loginEmailInput" placeholder="Email"></input>
              <input className="loginEmailInput" type="password" placeholder="Password"></input>
            </div>
            <button className="loginPagebtn">Login</button>
            <p className="loginToLoginLink">Don't have an account?
            <Link to="/signup">
             <a>Sign Up</a>
             </Link>
             </p>
          </div>
        </div>
        {/* </Form> */}
      </div>
    )
}

export default Login;