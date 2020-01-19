import React, { Component } from "react";
import { TextInput, Button } from "react-materialize";
import { register } from "./../../actions/authActions";
import { connect } from "react-redux";
//browser history
import history from "../../history";

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
    let newRegister = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.register(newRegister);
    history.push("/");
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

export default connect(null, { register })(UserRegister);
