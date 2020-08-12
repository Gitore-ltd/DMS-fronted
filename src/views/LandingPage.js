import React from "react"
import Logo from "../components/Logo"
import DmsInfo from "../components/LandingDmsInfo"
import NavBar from "../components/Navbar"
import DmsImage from "../components/DmsImage"
import classes from "../assets/styles/containers/LandingPage.module.css"

function LandingPage() {
  return (
    <div className={classes.LandingPage}>
      <Logo />
      <NavBar />
      <DmsInfo />
      <DmsImage />
    </div>
  )
}

export default LandingPage
