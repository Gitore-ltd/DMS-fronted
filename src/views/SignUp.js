import React from "react"
import SignupForm from "../components/SignupForm"
import DmsInfoContainer from "../containers/DmsInfoContainer"
import classes from "../assets/styles/components/SignUp.module.css"
function SignUp() {
  return (
    <div className={classes.CenterDmsInfo}>
      <DmsInfoContainer />
      <SignupForm />
    </div>
  )
}

export default SignUp
