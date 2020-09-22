import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './loginPage.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { connect } from 'react-redux';
import LineDivider from '../../components/lineDivider.js';
import LeftSide from '../../components/registrationLeftSide';
import { userSignin } from '../../store/actions/userAction';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const userData = await props.userSignin(user);
    if (userData) {
      localStorage.setItem('user-token', userData.jwtoken);
      const userRole = jwt.decode(userData.jwtoken).role;
      // console.log('userRole', userRole);
      if (userRole === 'customer') {
        props.history.push('/home');
      } else if (userRole === 'superAdmin') {
        props.history.push('/admin');
      } else {
        props.history.push('/seller');
      }
    }
  };

  const handleClickGmail = async () => {
    window.open(
      'https://debt-management-system.herokuapp.com/auth/login/google',
      '_blank'
    );
    // const res = await fetch(
    //   `https://debt-management-system.herokuapp.com/auth/login/google`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // );
  };

  return (
    <div className="loginContainer">
      <LeftSide />
      <div className="loginRight">
        <div className="loginRightContent">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="loginSocials">
              <span className="loginGmail" onClick={handleClickGmail}>
                <FcGoogle className="GmailIcon" />
                Login with Gmail
              </span>
              <span className="loginFacebook">
                <FaFacebookF className="facebookIcon" />
                Login with Gmail
              </span>
            </div>
            <LineDivider />
            <div className="loginInputs">
              <input
                className="loginEmailInput"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="loginEmailInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button className="loginPagebtn" type="submit">
              Login
            </button>
          </form>
          <p className="loginToLoginLink">
            Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  token: state.user.token,
});

export default connect(mapStateToProps, { userSignin })(Login);
