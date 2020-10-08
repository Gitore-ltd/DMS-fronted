import React, { useState } from 'react';
import './signupPage.css';
import { Link } from 'react-router-dom';
import LineDivider from '../../components/lineDivider.js';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import LeftSide from '../../components/registrationLeftSide';
import { connect } from 'react-redux';
import { userSignup } from '../../store/actions/userAction';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [show] = useState(false);
  const [message] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
      confirmPassword,
    };

    const userData = await props.userSignup(user);
    if (userData) {
      props.history.push('/updateprofile');
    }
  };

  return (
    <div className="signupContainer">
      <LeftSide />
      <div className="signupRight">
        <div className="signupRightContent">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <Alert key={1} variant="success" show={show}>
              {message}
            </Alert>
            <div className="signupSocials">
              <span className="signupGmail">
                <FcGoogle className="GmailIcon" />
                Sign Up with Gmail
              </span>
              <span className="signupFacebook">
                <FaFacebookF className="facebookIcon" />
                Sign Up with Gmail
              </span>
            </div>
            <LineDivider />
            <div className="signupInputs">
              <input
                className="signupEmailInput"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              ></input>
              <input
                className="signupPasswordInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              ></input>
              <input
                className="signupConfirmPasswordInput"
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></input>
            </div>
            <button className="signupPagebtn" type="submit">
              Sign Up
            </button>
          </form>
          <p className="signupToLoginLink">
            have an account?
            <Link to="/login">Login</Link>
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

export default connect(mapStateToProps, { userSignup })(SignUp);
