import React from "react"
import classes from "../assets/styles/components/ResetPasswordForm.module.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
function ResetPasswordForm() {
  return (
    <div className={classes.ResetPasswordForm}>
      <Form className={classes.Form}>
        {" "}
        <h1 className={classes.AlignHeaderResetPasswordTextLeft}>
          Reset Password
        </h1>
        <Form.Group controlId="formBasicEmail" className={classes.Space_btn}>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={classes.input_Size}
          />
        </Form.Group>
        <p className={classes.AlignResetPasswordTextLeft}>
          Enter email related to your account
        </p>
        <Button
          variant="primary"
          type="submit"
          className={classes.ResetPassword_btn}
        >
          <strong> Sign Up</strong>
        </Button>
        <p className={classes.alignGoBackToLoginTextCenter}>Go back to Login</p>
      </Form>
    </div>
  )
}

export default ResetPasswordForm
