//Import Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from './../firebase'
import { Button, NavItem } from "react-materialize";
//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
import { logoutUser } from "../../actions/authActions";
class LoginUser extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
    this.props.firebase.doSignOut();
  };
  render() {
    const { currentUser } = this.props;
    return (
      <NavItem>
        {currentUser}
        <Button onClick={this.onLogoutClick} className={MAIN_COLOR_FONT}>
          Logout
        </Button>
      </NavItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.user.name
  };
};
export default withFirebase(connect(mapStateToProps, { logoutUser })(LoginUser));
