import React from "react"
import CimerwaImage from "../assets/images/cimerwa.jpg"
import classes from "../assets/styles/components/cimerwa.module.css"
function Cimerwa() {
  return (
    <div className={classes.cement_Container}>
      <img
        src={CimerwaImage}
        alt="A picture of a cement"
        style={{ width: "40%", height: "390px" }}
      />
    </div>
  )
}

export default Cimerwa
