import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../views/login/Login';
import LandingPage from '../views/landingPage/LandingPage';
import Signup from '../views/signUp/SignUp';
import ResetPassword from '../views/ResetPassword';
import UpdateProfile from '../views/profile/UpdateProfile';
import Home from '../views/viewProduct/Home';
import ViewOneProduct from '../views/viewOneProduct/viewOneProduct';
import LoanAgreement from '../views/LoanAgreement/LoanAgreementPage';
import Loans from '../views/viewMyLoans/Loans';
import Pay from '../views/Pay';
import Seller from '../views/sellerView/seller';
import AddProduct from '../views/addProduct/AddProduct';
import ViewRequest from '../views/ViewRequest';
import OpenRequest from '../views/OpenRequest';
import requestManipulation from '../views/requestManipulation/requestManipulation';
import adminPage from '../views/adminPage/admin';
import socialLogin from '../views/socialLogin/socialLogin';
import classes from './App.css';

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
        {/* <Route path="/viewoneproduct" exact component={ViewOneProduct} /> */}
        <Route path="/loanagreement" exact component={LoanAgreement} />
        <Route path="/loans" exact component={Loans} />
        <Route path="/pay" exact component={Pay} />
        <Route path="/seller" exact component={Seller} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/viewrequest" exact component={ViewRequest} />
        <Route path="/openrequest" exact component={OpenRequest} />
        <Route path="/viewoneproduct" exact component={ViewOneProduct} />
        <Route
          path="/requestManipulation"
          exact
          component={requestManipulation}
        />
        <Route path="/admin" exact component={adminPage} />
        <Route path="/social-login" exact component={socialLogin} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
