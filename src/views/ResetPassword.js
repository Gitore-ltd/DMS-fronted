import React from "react"
import DmsInfoContainer from "../containers/DmsInfoContainer"
import ResetPasswordForm from "../components/ResetPasswordForm"
import classes from "../assets/styles/components/Login.module.css"
function ResetPassword() {
  return (
    <div className={classes.CenterDmsInfo}>
      <DmsInfoContainer />
      <ResetPasswordForm />
    </div>
  )
}

export default ResetPassword
