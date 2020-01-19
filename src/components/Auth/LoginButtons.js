//Import Modules
import React, { Component } from "react";
import { NavItem, Button, Col, Row } from "react-materialize";

//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";
class LoginButtons extends Component {
  render() {
    return (
      <NavItem>
        <Row>
          <Col s={5}>
            <Button className={MAIN_COLOR_FONT}>Login</Button>
          </Col>
          <Col s={5}>
            <Button className={MAIN_COLOR_FONT}>Register</Button>
          </Col>
        </Row>
      </NavItem>
    );
  }
}

export default LoginButtons;
