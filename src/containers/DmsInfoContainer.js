import React from "react"
import classes from "../assets/styles/containers/DmsInfoContainer.module.css"
import DmsInfo from "../components/DmsInfo"
function DmsInfoContainer() {
  return (
    <div className={classes.ContainerDmsInfo}>
      <DmsInfo />
    </div>
  )
}

export default DmsInfoContainer
