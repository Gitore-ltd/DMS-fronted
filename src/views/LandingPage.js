import React from "react"
import { Button } from 'react-bootstrap';
import classes from "../assets/styles/containers/LandingPage.module.css"
import NavAuth from '../components/NavAuth';

function LandingPage() {
  return (
    <div className={classes.LandingPage}>
      <NavAuth />
      <div className={classes.circle}></div>
      <div className={classes.circle2}></div>
      <div className={classes.Container}>
      <div className={classes.contentContainer}>
        <h1>DEBT MANAGMENT SYSTEM</h1>
        <p>This system allows Customers to request loans <br />on online and eases the process of payment
 of <br />those loans.</p>
        <Button>GET STARTED</Button>
      </div>
        <div className={classes.imageContainer}> 
       <img
            className={classes.landingPageImage}
            src={require('../assets/images/engineer.png')}
          /> 
         </div> 
        </div> 
    </div>
  )
}

export default LandingPage
