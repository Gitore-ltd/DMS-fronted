import React from "react"
import Cimerwa from "../components/Cimerwa"
import LoanRequest from "../components/requestloan"
import classes from "../assets/styles/containers/loanRequestContainer.module.css"
function loanRequestContainer() {
  return (
    <div className={classes.container}>
      <Cimerwa />
      <LoanRequest />
    </div>
  )
}

export default loanRequestContainer
