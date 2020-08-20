import React from "react"
import UserProfile from "../containers/userProfileInnerContainer"
import Form from "../components/UserProfileForm"
import classes from "../assets/styles/containers/UserProfileContainer.module.css"
function UserProfileContainer() {
  return (
    <div className={classes.UserProfileContainer}>
      <UserProfile />
      <Form />
    </div>
  )
}

export default UserProfileContainer
