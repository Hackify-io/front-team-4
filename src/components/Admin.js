//Import Modules
import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import history from './../history';
import store from './../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../utils/setAuthToken';
import { setCurrentUser, logoutUser } from './../actions/authActions';
import { getClinic } from './../actions/clinicActions';
//Import Components
import Navbar from './Admin/Layout/LayoutNav';
import Footer from './Admin/Layout/LayoutFooter';
import Landing from './Admin/Landing';
import ClinicInfo from './Admin/ClinicInfo';
import ClinicAppointments from './Admin/ClinicAppointments';
import LoginClinic from './Admin/Auth/LoginClinic';
import RegisterClinic from './Admin/Auth/RegisterClinic';
import PrivateRoute from './common/PrivateRoute';
//Import Routes
import {
  ADMIN_MAIN_APP_URL,
  ADMIN_LOGIN_URL,
  ADMIN_REGISTER_URL,
  ADMIN_EDIT_CLINIC,
  ADMIN_APPOINTMENTS_CLINIC
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
      if (!decoded || role !== 'clinic' || decoded.exp < currentTime) {
        //Logout user
        store.dispatch(logoutUser());
        //Redirect to Login
        history.push(ADMIN_LOGIN_URL);
      } else {
        //Set Auth Token header Auth
        setAuthToken(localStorage.jwt);

        //Set User and isAuthenticated
        const { email, id, clinicId, role } = decoded;
        const user = {
          id,
          clinicId,
          role,
          email,
          name: email
        };
        store.dispatch(setCurrentUser(user));
        store.dispatch(getClinic(clinicId));
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <PrivateRoute
            needAuth={false}
            exact
            loginUrl={ADMIN_MAIN_APP_URL}
            path={ADMIN_LOGIN_URL}
            component={LoginClinic}
          />
          <PrivateRoute
            needAuth={false}
            exact
            loginUrl={ADMIN_MAIN_APP_URL}
            path={ADMIN_REGISTER_URL}
            component={RegisterClinic}
          />
          <PrivateRoute
            privateRole="clinic"
            loginUrl={ADMIN_LOGIN_URL}
            exact
            path={ADMIN_MAIN_APP_URL}
            component={Landing}
          />
          <PrivateRoute
            privateRole="clinic"
            loginUrl={ADMIN_LOGIN_URL}
            exact
            path={ADMIN_EDIT_CLINIC}
            component={ClinicInfo}
          />
          <PrivateRoute
            privateRole="clinic"
            loginUrl={ADMIN_LOGIN_URL}
            exact
            path={ADMIN_APPOINTMENTS_CLINIC}
            component={ClinicAppointments}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
