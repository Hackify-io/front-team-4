import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth,
  needAuth = true,
  privateRole,
  loginUrl,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === needAuth && auth.user.role === privateRole ? (
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
