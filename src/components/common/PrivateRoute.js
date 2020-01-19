import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN_URL } from "./../../routes";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      //TODO: Remove HARDCODE true if JWT is enabled
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={LOGIN_URL} />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
