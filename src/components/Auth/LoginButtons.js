//Import Modules
import React, { Component } from 'react';
import { NavItem, Button, Col, Row } from 'react-materialize';
import history from './../../history';
import { LOGIN_URL, REGISTER_URL } from '../../routes';

//Import Utils
import { MAIN_COLOR_FONT } from './../../utils/colors';
class LoginButtons extends Component {
  handleLogin() {
    history.push(LOGIN_URL);
  }

  handleOnRegister = () => {
    history.push(REGISTER_URL);
  };

  render() {
    return (
      <NavItem>
        <Row>
          <Col s={5}>
            <Button className={MAIN_COLOR_FONT} onClick={this.handleLogin}>
              Login
            </Button>
          </Col>
          <Col s={5}>
            <Button className={MAIN_COLOR_FONT} onClick={this.handleOnRegister}>
              Register
            </Button>
          </Col>
        </Row>
      </NavItem>
    );
  }
}

export default LoginButtons;
