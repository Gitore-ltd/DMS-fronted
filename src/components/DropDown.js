import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = (props) => {
  const handleLogout = async () => {
    const userToken = localStorage.getItem('user-token');
    const res = await fetch(
      `https://debt-management-system.herokuapp.com/auth/logout`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'user-token': userToken,
        },
      }
    );
    localStorage.removeItem('user-token');
  };

  return (
    <>
      <div className={props.classes.toString().replace(',', ' ')}>
        <Link
          to="/updateProfile"
          className="sign-out-drop-down"
          onClick={() => console.log('signout')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <p className="icon-text">Profile</p>
        </Link>
        <Link to="/" className="sign-out-drop-down" onClick={handleLogout}>
          <i
            className="sign-out-drop-down-icon fa fa-sign-out"
            aria-hidden="true"
          ></i>
          <p className="icon-text">Sign Out</p>
        </Link>
      </div>
    </>
  );
};

export default DropDown;
