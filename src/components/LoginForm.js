import React from "react"
import classes from "../assets/styles/components/LoginForm.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
function LoginForm() {
  return (
    <div className={classes.LoginForm}>
      <Form className={classes.Form}>
        {" "}
        <p className={classes.LoginAlignTextLeft}>Login</p>
        <ButtonGroup aria-label="Basic example" className={classes.Space_btn}>
          <Button variant="secondary" className={classes.LoginWithGmail_btn}>
            Login with Gmail
          </Button>
          <Button variant="secondary" className={classes.LoginWithFacebook_btn}>
            Login with Facebook
          </Button>
        </ButtonGroup>
        <Form.Group controlId="formBasicEmail" className={classes.Space_btn}>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={classes.input_Size}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className={classes.Space_btn}>
          <Form.Control
            type="password"
            placeholder="Password"
            className={classes.input_Size}
          />
        </Form.Group>
        <p className={classes.alignTextRight}>Forgot Password?</p>
        <Button variant="primary" type="submit" className={classes.Login_btn}>
          <strong> Login</strong>
        </Button>
        <p className={classes.alignTextRight}>Don't have an account?Sign Up</p>
      </Form>
    </div>
  )
}

export default LoginForm
