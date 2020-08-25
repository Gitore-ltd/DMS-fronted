import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import NavAuth from '../../components/NavAuth';

const LandingPage = () => {
  return(
    <div className="landingPageContainer">
            <NavAuth />
        <div className="landingPageLeft">
          <div className="landingPageLeftCircle" />
          <div className="landingPageLeftContent">
          <h1>DEBT MANAGMENT SYSTEM</h1>
        <p>This system allows Customers to request loans <br />on online and eases the process of payment
 of <br />those loans.</p>
       <Link to="/signup">
        <button className="getStartedBtn">GET STARTED</button>
       </Link>
          </div>
        </div>
        <div className="landingPageRight">
          <div className="landingPageRightCircle" />
          <div className="landingPageRightContent">
          <img
            className="landingPageImage"
            src={require('../../assets/images/engineer.png')}
            alt="engineer pic"
          /> 
          </div>
        </div>
    </div>
  )
}

export default LandingPage;