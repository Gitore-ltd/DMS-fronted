import React from "react"
import LogoImage from "../assets/images/logo.jpg"
import classes from "../assets/styles/components/Logo.module.css"
function Logo() {
  return (
    <div className={classes.LogoDiv}>
      <h1>
        <img
          src={LogoImage}
          alt="Logo"
          style={{ marginLeft: "20px", width: "136px" }}
        />
      </h1>
    </div>
  )
}

export default Logo
