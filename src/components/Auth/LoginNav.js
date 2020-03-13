//Import Modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//Import Components
import { withFirebase} from "./../firebase";
import { logoutUser, partialSocialLogin } from "../../actions/authActions";
//UI Components
import LoginButtons from "./LoginButtons";
import LoginUser from "./LoginUser";

class LoginNav extends Component {
  componentDidMount() {
    this.listener = this.props.firebase.onAuthUserListener(
      authUser => {
        this.props.partialSocialLogin(authUser);
      },
      () => {
        this.props.logoutUser();
      }
    );
  }

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
export default withFirebase(connect(mapStateToProps, {partialSocialLogin, logoutUser})(LoginNav));
