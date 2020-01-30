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
import Login from './Auth/Login';
import RegisterUser from './Auth/RegisterUser';
import Landing from './Landing';
import Clinic from './Clinic/Clinic';
import Appointment from './Appointment';
import PrivateRoute from './common/PrivateRoute';
//Imprt Routes
import {
  MAIN_APP_URL,
  CLINICS_URL,
  LOGIN_URL,
  REGISTER_URL
} from './../routes';

class Main extends Component {
  componentWillMount() {
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
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path={LOGIN_URL} component={Login} />
          <Route exact path={REGISTER_URL} component={RegisterUser} />
          <Route exact path={MAIN_APP_URL} component={Landing} />
          <PrivateRoute
            path={MAIN_APP_URL + CLINICS_URL + '/:clinicId/appointment'}
            privateRole="member"
            loginUrl={LOGIN_URL}
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
