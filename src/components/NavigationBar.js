import React from "react"
import Logo from "../components/Logo"
import Navbar from "react-bootstrap/Navbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import classes from "../assets/styles/components/NavigationBar.module.css"

function NavigationBar() {
  return (
    <div className={classes.navBarContainer}>
      <Logo />
      <Navbar bg="light" className={classes.Navbar}>
        <ButtonGroup className={classes.ButtonGroup}>
          <Button className={classes.Button}>Home</Button>
          <Button className={classes.Button}>Loans</Button>
          <Button className={classes.Button}>Reports</Button>
          <FontAwesomeIcon
            icon={faBell}
            style={{
              width: "130px",
              color: "white",
              height: "33px",
              paddingTop: "12px",
            }}
          />
          <p className={classes.UserName}>Marlene</p>
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{
              width: "77px",
              color: "white",
              height: "40px",
              marginTop: "10px",
            }}
          />
          <FontAwesomeIcon
            icon={faSortDown}
            style={{
              width: "27px",
              color: "black",
              height: "43px",
              marginRight: "10px",
              paddingRight: "4px",
            }}
          />

          <Dropdown className={classes.Dropdown}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={classes.DropdownToggle}
            >
              english
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Kinyarwanda</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <FontAwesomeIcon
            icon={faSortDown}
            style={{
              color: "#EFD917",
              width: "27px",
              height: "43px",
            }}
          />
        </ButtonGroup>
      </Navbar>
    </div>
  )
}

export default NavigationBar
