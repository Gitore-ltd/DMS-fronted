import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";
import LineDivider from "../../components/lineDivider.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { connect } from "react-redux";
import LeftSide from "../../components/registrationLeftSide";
import { userSignin } from "../../store/actions/userAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const userData = await props.userSignin(user);
    if(userData){
      localStorage.setItem('user-token', userData.jwtoken);
      props.history.push('/home')
    }
  };

  return (
    <div className="loginContainer">
      <LeftSide />
      <div className="loginRight">
        <div className="loginRightContent">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="loginSocials">
              <span className="loginGmail">
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
