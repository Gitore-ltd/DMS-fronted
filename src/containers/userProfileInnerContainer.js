import React from "react"
import UserProfile from "../components/UserProfile"
import classes from "../assets/styles/containers/UserProfileInnerContainer.module.css"
function userProfileInnerContainer() {
  return (
    <div className={classes.Container}>
      <UserProfile />
    </div>
  )
}

export default userProfileInnerContainer
