import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-materialize';
import IconTextInput from '../../common/Inputs/IconTextInput';
import { validateLoginClinicInput } from '../../../validations/admin/auth/loginClinicFormValidator';

class LoginClinicForm extends Component {
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
            component={IconTextInput}
            identifier="email"
            icon="person_outline"
            label="Username"
          />
        </Row>
        <Row className="margin">
          <Field
            type="password"
            name="password"
            component={IconTextInput}
            identifier="password"
            icon="lock_outline"
            label="Password"
          />
        </Row>
        <Row>
          <Col className="input-field" s={12}>
            <Button waves="light" className="extended">
              Login
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const validate = formValues => {
  return validateLoginClinicInput(formValues);
};

export default reduxForm({
  form: 'loginClinicForm',
  validate
})(LoginClinicForm);
