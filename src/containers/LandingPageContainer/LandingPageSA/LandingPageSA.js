import React from "react"
import DMSInfo from "../../../components/LandingPageComponents/DMsInfo/DMSInfo"
import Logo from "../../../components/LandingPageComponents/Logo/Logo"
import classes from "./LandingPageSA.module.css"
function LandingPageSA() {
  return (
    <div className={classes.Landing}>
      <Logo />
      <DMSInfo />
    </div>
  )
}

export default LandingPageSA
