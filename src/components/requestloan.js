import React from "react"
import Card from "../components/card"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import classes from "../assets/styles/components/requestloan.module.css"
function requestloan() {
  return (
    <div className={classes.loanRContainer}>
      <h1 style={{ fontSize: "x-larger" }} className={classes.textColor}>
        Title:Cimerwa Cement
      </h1>
      <p className={classes.textColor}>
        Location:{" "}
        <span className={classes.spaceBwtn}>Rwanda-Kigali-Gisozi</span>
      </p>
      <p className={classes.textColor}>
        Number: <span className={classes.spaceBwtn}>0781133785</span>{" "}
      </p>
      <p className={classes.textColor}>
        Quality: <span className={classes.spaceBwtn}>1</span>
      </p>
      <p className={classes.textColor}>
        Quantity:
        <span className={classes.border} style={{ marginLeft: "5px" }}>
          <FontAwesomeIcon icon={faPlus} className={classes.plusIcon} />
        </span>
        <span
          className={classes.border}
          style={{ color: "#8D8D8D", fontWeight: "bolder" }}
        >
          <strong style={{ padding: "2px" }}>1</strong>
        </span>
        <span className={classes.border}>
          <FontAwesomeIcon icon={faMinus} className={classes.minusIcon} />
        </span>
      </p>
      <p className={classes.textColor}>Total:</p>
      <Card />
      <Button variant="primary" className={classes.Button}>
        Request Loan
      </Button>
    </div>
  )
}

export default requestloan
