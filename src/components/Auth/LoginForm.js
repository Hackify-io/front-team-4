import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-materialize';
import { Button } from 'semantic-ui-react';
import FacebookLoginButton from './../common/Inputs/SocialLogins/FacebookLoginButton';
import GoogleLoginButton from './../common/Inputs/SocialLogins/GoogleLoginButton';
import IconTextInput from '../common/Inputs/IconTextInput';
import { validateLoginInput } from '../../validations/auth/loginFormValidator';

class LoginForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Row>
          <Col s={12} className="input-field">
            <h5 className="ml-4">Sign in</h5>
          </Col>
        </Row>
        <Row className="margin">
          <Field
            type="text"
            name="email"
            size={12}
            component={IconTextInput}
            identifier="email"
            icon="person_outline"
            label="Username"
          />
        </Row>
        <Row className="margin">
          <Field
            type="password"
            password
            name="password"
            size={12}
            component={IconTextInput}
            identifier="password"
            icon="lock_outline"
            label="Password"
          />
        </Row>
        <Row>
          <Col className="input-field" s={12}>
            <Button primary>
              Login
            </Button>
          </Col>
          <Col s={12}>
            Or login with a social account
          </Col>
          <Col className="input-field" s={12}>
            <FacebookLoginButton/>
          </Col>
          <Col className="input-field" s={12}>
            <GoogleLoginButton/>
          </Col>
        </Row>
      </form>
    );
  }
}

const validate = formValues => {
  return validateLoginInput(formValues);
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
