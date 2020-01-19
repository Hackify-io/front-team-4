import React, { Component } from "react";
import { TextInput, Button } from "react-materialize";
import { loginUser } from "../../actions/authActions";

import history from "../../history";
import { connect } from "react-redux";
// import { MAIN_APP_URL } from "./../routes";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleEmail = e => {
    let appState = this.state;
    appState.email = e.target.value;
    this.setState(appState);
  };
  handlePass = e => {
    let state = this.state;
    state.password = e.target.value;
    this.setState(state);
  };

  handleOnSubmit = () => {
    this.props.loginUser();
    history.push("/");
  };

  render() {
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
        <Button onClick={this.handleOnSubmit}>Sign in</Button>
      </div>
    );
  }
}

export default connect(null, { loginUser })(LoginForm);
