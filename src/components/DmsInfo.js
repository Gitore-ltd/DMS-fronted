import React from "react"
import classes from "../assets/styles/components/DmsInfo.module.css"
function DmsInfo() {
  return (
    <div className={classes.DmsInfo}>
      <h1 className={classes.HeaderSize}>DEBT MANAGEMENT SYSTEM</h1>
      <p className={classes.textSize}>
        This system allows clients to request loans online and eases the process
        of payment of those loans
      </p>
    </div>
  )
}

export default DmsInfo
