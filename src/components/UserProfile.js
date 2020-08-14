import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import classes from "../assets/styles/components/UserProfile.module.css"
function UserProfile() {
  return (
    <div>
      <p
        style={{
          width: "40px",
          height: "37px",
          padding: "22px",
          backgroundColor: "white",
          border: "1px solid #848484",
          borderRadius: "50%",
          marginBottom: "10px",
          marginLeft: "40px",
        }}
      >
        <FontAwesomeIcon icon={faUser} size="3x" style={{}} />
      </p>

      <p className={classes.userName}>Umuhoza Marlene</p>
      <p className={classes.userRole}>Customer</p>
      <ButtonGroup className={classes.buttonContainer}>
        <Button className={classes.uploadButton}>UPLOAD PHOTO</Button>
        <Button className={classes.removeButton}>REMOVE</Button>
      </ButtonGroup>
    </div>
  )
}

export default UserProfile
