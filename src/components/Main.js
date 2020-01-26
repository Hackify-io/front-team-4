//Import Modules
import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from './../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../utils/setAuthToken';
import { setCurrentUser, logoutUser } from './../actions/authActions';
//Import Components
import Navbar from './Layout/LayoutNav';
import Footer from './Layout/LayoutFooter';
import Landing from './Landing';
import Clinic from './Clinic/Clinic';
import Appointment from './Appointment';
import PrivateRoute from './common/PrivateRoute';
//Imprt Routes
import { MAIN_APP_URL, CLINICS_URL, LOGIN_URL } from './../routes';
//Check For Token
console.log(localStorage.jwt);
if (localStorage.jwt) {
  //Decode the Token and get Info
  const decoded = jwt_decode(localStorage.jwt);
  //Check if the Token expired
  const currentTime = Date.now() / 1000;
  if (!decoded || decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Redirect to Login
    window.location.href = LOGIN_URL;
  } else {
    //Set Auth Token header Auth
    setAuthToken(localStorage.jwt);

    //Set User and isAuthenticated
    const { email, id } = decoded;
    const user = {
      id,
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
          <Route exact path={MAIN_APP_URL} component={Landing} />
          <PrivateRoute
            path={MAIN_APP_URL + CLINICS_URL + '/:clinicId/appointment'}
            component={Appointment}
          />
          <Route
            exact
            path={MAIN_APP_URL + CLINICS_URL + '/:clinicId'}
            component={Clinic}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
