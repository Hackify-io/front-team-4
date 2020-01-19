import React, { Component } from 'react';
import { TextInput, Button } from 'react-materialize';

//browser history
import history from '../../history';
// import { connect } from 'react-redux';

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmail = e => {
    let state = this.state;
    state.email = e.target.value;
    this.setState(state);
  };

  handlePass = e => {
    let state = this.state;
    state.password = e.target.value;
    this.setState(state);
  };

  handleOnSubmit = () => {
    alert('User registered successfully');
    history.push('/');
  };

  render() {
    return (
      <div>
        <h2>User register form</h2>
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
        <Button onClick={this.handleOnSubmit}>Register</Button>
      </div>
    );
  }
}

export default UserRegister;
// connect(null, { registerUser })(UserRegister)
