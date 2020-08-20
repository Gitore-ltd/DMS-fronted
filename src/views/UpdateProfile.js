import React from "react"
import NavBar from "../components/Navbar"
import UserProfile from "../containers/UserProfileContainer"
import classes from "../assets/styles/containers/UpdateProfile.module.css"

function UpdateProfile() {
  return (
    <div className={classes.UpdateProfileContainer}>
      <NavBar />
      <UserProfile />
    </div>
  )
}

export default UpdateProfile
