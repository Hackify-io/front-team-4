//Import Modules
import React, { Component, Fragment } from "react";
import { Button } from "react-materialize";
//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
class LoginUser extends Component {
  render() {
    return (
      <Fragment>
        Jhonnatan Guerrero
        <Button flat className={MAIN_COLOR_FONT}>
          Logout
        </Button>
      </Fragment>
    );
  }
}

export default LoginUser;
