import React, { useState, useEffect } from 'react';
import Bell from "./Bell";
import { Link } from "react-router-dom";
import Logo from "../assets/images/mainlogo.png";
import UserAvatar from "../assets/images/avatar.png";
import DropDown from "./DropDown";
import "../assets/styles/components/Navbar.css";

const SellerNavBar = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const token = "A";
  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const classes = ["drop-down"];
  if (toggleMenu) {
    classes.push("show");
  }

  useEffect(() => {
    async function fetchUserProfile() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/getProfile`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        }
        );
        const user = await res.json();
        setUserProfile(user.user);
      }
      fetchUserProfile();
    },[]);

  return (
    <>
      <div className="navbar">
      <div className="navbarLeft">
      <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="DMS" />
          </Link>
        </div>
      </div>
      <div className="navbarRight">
      <div className="menu">
          {token !== null ? (
            <>
              <div>
              <Link to="/home">Home</Link>
                <Link to="/loans">Loans</Link>
                <Link to="/viewrequest">Reports</Link>
                <Link to="/addproduct">Add product</Link>
              </div>
              <Bell />
            </>
          ) : (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/signup" className="signup">
                Get Started
              </Link>
            </>
          )}
        </div>
        <div id="top-menu-avatar" onClick={showMenu}>
          <div className="user-name">{userProfile.firstName} {userProfile.lastName}</div>
          <img className="user-avatar" src={UserAvatar} alt="" />
          <i className="fa fa-caret-down" aria-hidden="true"></i>
          <DropDown classes={classes} />
        </div>
      </div>
      </div>
    </>
  );
};

export default SellerNavBar;
