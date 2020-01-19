//Import Modules
import React, { Component } from "react";
import { Button, NavItem } from "react-materialize";
//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
class LoginUser extends Component {
  render() {
    return (
      <NavItem>
        Jhonnatan Guerrero
        <Button className={MAIN_COLOR_FONT}>Logout</Button>
      </NavItem>
    );
  }
}

export default LoginUser;
