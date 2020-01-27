import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth,
  privateRole,
  loginUrl,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true && auth.user.role === privateRole ? (
        <Component {...props} />
      ) : (
        <Redirect to={loginUrl} />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
