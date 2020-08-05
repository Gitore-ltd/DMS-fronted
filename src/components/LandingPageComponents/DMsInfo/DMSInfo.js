import React from "react"
import Button from "react-bootstrap/Button"
import classes from "./DMSInfo.module.css"
function DMSInfo() {
  return (
    <div className={classes.DMSInfo}>
      <h2 className={classes.h2}>DEBT MANAGEMENT SYSTEM</h2>
      <p>
        <span className={classes.text_Adjust}>
          {" "}
          This system allows clients to request loans online and eases the
          process of payment of those loans.
        </span>
      </p>
      <Button className={classes.elementType} variant="light">
        GET STARTED
      </Button>
    </div>
  )
}

export default DMSInfo
