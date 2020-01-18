//Import Modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Import Components
import LoginButtons from "./LoginButtons";
import LoginUser from "./LoginUser";

class LoginNav extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Fragment>{isAuthenticated ? <LoginUser /> : <LoginButtons />}</Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};
export default connect(mapStateToProps, {})(LoginNav);
