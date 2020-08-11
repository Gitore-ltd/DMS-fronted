import React from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"
import classes from "../assets/styles/components/Navbar.module.css"

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <ButtonGroup className={classes.elementType}>
        <Button className={classes.SignUp_btn}>Sign Up</Button>
        <Button className={classes.Login_btn}>Login</Button>

        <Dropdown className={classes.DropdownCustomization}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ height: "39px" }}
          >
            english
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Kinyarwanda</Dropdown.Item>
            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </div>
  )
}

export default Navbar