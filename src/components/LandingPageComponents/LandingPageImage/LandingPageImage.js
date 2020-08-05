import React from "react"
import classes from "./LandingPageImage.module.css"
import DMSImage from "../../LandingPageComponents/DmsImage/DmsImage"
function LandingPageImage() {
  return (
    <div className={classes.centerImage}>
      {" "}
      <DMSImage />
    </div>
  )
}

export default LandingPageImage
