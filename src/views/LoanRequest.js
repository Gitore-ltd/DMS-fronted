import React from "react"
import Navbar from "../components/Navbar"
import LoanRequestContainer from "../containers/loanRequestContainer"
import classes from "../assets/styles/containers/loanRequest.module.css"

function LoanRequest() {
  return (
    <div className={classes.container}>
      <Navbar />
      <LoanRequestContainer />
    </div>
  )
}

export default LoanRequest
