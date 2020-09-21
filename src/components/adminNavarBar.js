import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/mainlogo.png';
import DropDown from '../components/DropDown';
import '../assets/styles/components/adminNavBar.css';

const NavAdmin = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const token = 'A';
  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const classes = ['drop-down'];
  if (toggleMenu) {
    classes.push('show');
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
  }, []);

  return (
    <>
      <div className="navbarAdmin">
        <div className="navbarLeftAdmin">
          <div className="logo">
            <Link to="/admin">
              <img src={Logo} alt="DMS" />
            </Link>
          </div>
        </div>
        <div className="navbarRightAdmin">
          <div id="top-menu-avatar" onClick={showMenu}>
            <div className="user-name">
              {userProfile.firstName} {userProfile.lastName}
            </div>
            <img
              className="user-avatar"
              src={userProfile.profileImage}
              alt=""
            />
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            <DropDown classes={classes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAdmin;
