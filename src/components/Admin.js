//Import Modules
import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from './../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../utils/setAuthToken';
import { setCurrentUser, logoutUser } from './../actions/authActions';
//Import Components
import Navbar from './Admin/Layout/LayoutNav';
import Footer from './Admin/Layout/LayoutFooter';
import Landing from './Admin/Landing';
import LoginClinic from './Admin/Auth/LoginClinic';
import RegisterClinic from './Admin/Auth/RegisterClinic';
//import UserRegister from './Auth/UserRegister';
//import Landing from './Landing';
import PrivateRoute from './common/PrivateRoute';
//Imprt Routes
import {
  ADMIN_MAIN_APP_URL,
  ADMIN_LOGIN_URL,
  ADMIN_REGISTER_URL
} from './../routes';
//Check For Token
if (localStorage.jwt) {
  //Decode the Token and get Info
  const decoded = jwt_decode(localStorage.jwt);
  const { role } = decoded;
  //Check if the Token expired
  const currentTime = Date.now() / 1000;
  if (!decoded || role !== 'member' || decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Redirect to Login
    window.location.href = ADMIN_LOGIN_URL;
  } else {
    //Set Auth Token header Auth
    setAuthToken(localStorage.jwt);

    //Set User and isAuthenticated
    const { email, id, role } = decoded;
    const user = {
      id,
      role,
      email,
      name: email
    };
    store.dispatch(setCurrentUser(user));
  }
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path={ADMIN_LOGIN_URL} component={LoginClinic} />
          <Route exact path={ADMIN_REGISTER_URL} component={RegisterClinic} />
          <PrivateRoute
            privateRole="clinic"
            loginUrl={ADMIN_LOGIN_URL}
            path={ADMIN_MAIN_APP_URL}
            component={Landing}
          />
          {/* <Route exact path={REGISTER_URL} component={UserRegister} />
          <Route exact path={MAIN_APP_URL} component={Landing} /> */}
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
