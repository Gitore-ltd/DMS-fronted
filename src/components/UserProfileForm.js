import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

import classes from "../assets/styles/components/UserProfileForm.module.css"
function UserProfileForm() {
  return (
    <div className={classes.Container}>
      <p
        style={{ fontSize: "x-large", fontWeight: "bold", marginLeft: "10px" }}
      >
        MY PROFILE
      </p>
      <p style={{ textAlign: "center", width: "70%", color: "#848484" }}>
        PERSONAL INFORMATION
      </p>
      <Form>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>
              FirstName
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>LastName</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>Gender</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>
              National ID
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>Email</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row className={classes.DisplayHorizontally}>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>Tel</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <Form.Row
          className={classes.DisplayHorizontally}
          style={{ marginBottom: "10px" }}
        >
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className={classes.SpaceBtwLabels}
          >
            <Form.Label className={classes.TextLabelColor}>Address</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" className={classes.InputField} />
          </Form.Group>
        </Form.Row>
        <ButtonGroup
          aria-label="Basic example"
          className={classes.ButtonContainer}
        >
          <Button variant="secondary" className={classes.UpdateButton}>
            UPDATE PROFILE
          </Button>
          <Button variant="secondary" className={classes.CancelButton}>
            CANCEL
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}

export default UserProfileForm
