//Import Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, NavItem } from "react-materialize";
//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
import { logoutUser } from "../../actions/authActions";
class LoginUser extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
  };
  render() {
    return (
      <NavItem>
        Jhonnatan Guerrero
        <Button onClick={this.onLogoutClick} className={MAIN_COLOR_FONT}>
          Logout
        </Button>
      </NavItem>
    );
  }
}

export default connect(null, { logoutUser })(LoginUser);
