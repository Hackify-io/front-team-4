//Import Modules
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import store from "./../store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./../actions/authActions";
//Import Components
import Navbar from "./Layout/LayoutNav";
import Footer from "./Layout/LayoutFooter";
import Login from "./Auth/Login";
import RegisterUser from "./Auth/RegisterUser";
import Landing from "./Landing";
import Clinic from "./Clinic/Clinic";
import Appointment from "./Appointment";
import PrivateRoute from "./common/PrivateRoute";
//Imprt Routes
import {
  MAIN_APP_URL,
  CLINICS_URL,
  LOGIN_URL,
  REGISTER_URL
} from "./../routes";

class Main extends Component {
  componentWillMount() {
    //Check For Token
    if (localStorage.jwt) {
      console.log('main');
      //Decode the Token and get Info
      const decoded = jwt_decode(localStorage.jwt);
      const { role } = decoded;
      //Check if the Token expired
      const currentTime = Date.now() / 1000;
      if (!decoded || role !== "member" || decoded.exp < currentTime) {
        //Logout user
        store.dispatch(logoutUser());
      } else {
        //Set Auth Token header Auth
        setAuthToken(localStorage.jwt);

        //Set User and isAuthenticated
        const { email, id, role, userData } = decoded;
        console.log(userData);
        const user = {
          id,
          role,
          email,
          name: userData.name,
          data: userData
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
          <PrivateRoute
            needAuth={false}
            exact
            loginUrl={MAIN_APP_URL}
            path={LOGIN_URL}
            component={Login}
          />
          <PrivateRoute
            needAuth={false}
            exact
            loginUrl={MAIN_APP_URL}
            path={REGISTER_URL}
            component={RegisterUser}
          />
          <Route exact path={MAIN_APP_URL} component={Landing} />
          <PrivateRoute
            path={CLINICS_URL + "/:clinicId/appointment"}
            privateRole="member"
            loginUrl={LOGIN_URL}
            component={Appointment}
          />
          <Route exact path={CLINICS_URL + "/:clinicId"} component={Clinic} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
