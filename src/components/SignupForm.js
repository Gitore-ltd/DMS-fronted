import React from "react"
import classes from "../assets/styles/components/SignUpForm.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
function SignupForm() {
  return (
    <div className={classes.SignUpForm}>
      <Form className={classes.Form}>
        {" "}
        <p className={classes.SignUpAlignTextLeft}>Sign Up</p>
        <ButtonGroup aria-label="Basic example" className={classes.Space_btn}>
          <Button variant="secondary" className={classes.SignUpWithGmail_btn}>
            <FontAwesomeIcon icon={faEnvelope} className={classes.mailIcon} />
            Sign Up with Gmail
          </Button>
          <Button
            variant="secondary"
            className={classes.SignUpWithFacebook_btn}
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className={classes.facebookIcon}
            />
            Sign Up with Facebook
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
          <FontAwesomeIcon icon={faEye} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className={classes.Space_btn}>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className={classes.input_Size}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={classes.SignUp_btn}>
          <strong> Sign Up</strong>
        </Button>
        <p className={classes.alignTextRight}>have an account?Login</p>
      </Form>
    </div>
  )
}

export default SignupForm
