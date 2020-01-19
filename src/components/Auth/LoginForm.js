import React, { Component } from 'react';
import { TextInput, Button } from 'react-materialize';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      email: '',
      password: ''
    };
  }
  handleEmail(e) {
    // let email = this.state.email;
    // email = e.target.value;
    // this.setState(email);
  }
  handlePass(e) {
    console.log(e);
  }

  render() {
    console.log('render method of login form');

    return (
      <div>
        <h2>Login in your account</h2>
        <TextInput
          email
          label="Email"
          validate
          onChange={this.handleEmail}
          value={this.state.email}
        />
        <TextInput
          password
          label="password"
          onChange={this.handlePass}
          validate
        />
        <Button>Sign in</Button>
      </div>
    );
  }
}

export default LoginForm;
