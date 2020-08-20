import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Login from "../views/Login"
import LandingPage from "../views/LandingPage"
import Signup from "../views/SignUp"
import ResetPassword from "../views/ResetPassword"
import UpdateProfile from "../views/UpdateProfile"
import Home from "../views/Home"
import loanrequest from "../views/LoanRequest"
import LoanAgreement from "../views/LoanAgreementPage"
import Loans from "../views/Loans"
import Pay from "../views/Pay"
import Seller from "../views/Seller"
import AddProduct from "../views/AddProduct"
import ViewRequest from "../views/ViewRequest"
import OpenRequest from "../views/OpenRequest"
import classes from "./App.css"

const App = () => (
  <div className={classes.App}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/resetpassword" exact component={ResetPassword} />
        <Route path="/updateprofile" exact component={UpdateProfile} />
        <Route path="/home" exact component={Home} />
        <Route path="/loanrequest" exact component={loanrequest} />
        <Route path="/loanagreement" exact component={LoanAgreement} />
        <Route path="/loans" exact component={Loans} />
        <Route path="/pay" exact component={Pay} />
        <Route path="/seller" exact component={Seller} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/viewrequest" exact component={ViewRequest} />
        <Route path="/openrequest" exact component={OpenRequest} />
      </Switch>
    </BrowserRouter>
  </div>
)
export default App
