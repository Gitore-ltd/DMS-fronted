import React from "react";
import { Link } from "react-router-dom";

const DropDown = (props) => {
  return (
    <>
      <div className={props.classes.toString().replace(",", " ")}>
        <Link
          to="/updateProfile"
          className="sign-out-drop-down"
          onClick={() => console.log("signout")}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <p className="icon-text">Profile</p>
        </Link>
        <Link
          to="/"
          className="sign-out-drop-down"
          onClick={() => console.log("signout")}
        >
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
