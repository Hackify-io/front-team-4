//Import Modules
import React, { Component, Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import history from './../../history';
import { LOGIN_URL, REGISTER_URL } from '../../routes';

class LoginButtons extends Component {
  handleLogin() {
    history.push(LOGIN_URL);
  }

  handleOnRegister = () => {
    history.push(REGISTER_URL);
  };

  render() {
    return (
      <Fragment>
        <Menu.Item
          name='signin'
          onClick={this.handleLogin}
          >
            Sign In
        </Menu.Item>
        <Menu.Item
          name='signup'
          onClick={this.handleOnRegister}
          >
            Register
        </Menu.Item>
      </Fragment>
      
    );
  }
}

export default LoginButtons;
