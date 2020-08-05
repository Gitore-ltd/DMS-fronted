import React from "react"
import LandingPageImage from "../../../components/LandingPageComponents/LandingPageImage/LandingPageImage"
import Navbar from "../../../components/LandingPageComponents/Navbar/Navbar"
import classes from "./LandingPageSB.module.css"
function LandingPageSB() {
  return (
    <div className={classes.Landing}>
      <Navbar />
      <LandingPageImage />
    </div>
  )
}

export default LandingPageSB
