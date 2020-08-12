import React from "react"
import LoginForm from "../components/LoginForm"
import DmsInfoContainer from "../containers/DmsInfoContainer"
import classes from "../assets/styles/components/Login.module.css"
function Login() {
  return (
    <div className={classes.CenterDmsInfo}>
      <DmsInfoContainer />
      <LoginForm />
    </div>
  )
}

export default Login
