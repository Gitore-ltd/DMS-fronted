import React from "react"
import classes from "../assets/styles/components/DmsImage.module.css"
import DMSImage from "../assets/images/DMS.png"
function DmsImage() {
  return (
    <div className={classes.imageContainerSize}>
      <img src={DMSImage} className={classes.imageSize} alt="DmsImage" />
    </div>
  )
}
export default DmsImage
