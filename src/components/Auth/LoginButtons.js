//Import Modules
import React, { Component, Fragment } from "react";
import { Button } from "react-materialize";

//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
class LoginButtons extends Component {
  render() {
    return (
      <Fragment>
        <Button flat className={MAIN_COLOR_FONT}>
          Login
        </Button>
        <Button flat className={MAIN_COLOR_FONT}>
          Register
        </Button>
      </Fragment>
    );
  }
}

export default LoginButtons;
