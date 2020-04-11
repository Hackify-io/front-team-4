import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-materialize';
import IconTextInput from '../../common/Inputs/IconTextInput';
import { validateRegisterClinicInput } from '../../../validations/admin/auth/registerClinicFormValidator';

class LoginClinicForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="register-form"
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
            label="Email"
          />
        </Row>
        <Row className="margin">
          <Field
            type="password"
            password
            name="password"
            size={6}
            component={IconTextInput}
            identifier="password"
            icon="lock_outline"
            label="Password"
          />
          <Field
            type="password"
            password
            name="confirmPassword"
            size={6}
            component={IconTextInput}
            identifier="confirmPassword"
            icon="lock_outline"
            label="Confirm Password"
          />
        </Row>

        <Row className="margin">
          <Field
            type="text"
            name="name"
            size={12}
            component={IconTextInput}
            identifier="name"
            icon="personal_video"
            label="Clinic Name"
          />
        </Row>
        <Row>
          <Col className="input-field" s={12}>
            <Button waves="light" className="extended">
              Register
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const validate = (formValues) => {
  return validateRegisterClinicInput(formValues);
};

export default reduxForm({
  form: 'loginClinicForm',
  validate,
})(LoginClinicForm);
