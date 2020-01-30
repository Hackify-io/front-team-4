import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-materialize';
import IconTextInput from '../common/Inputs/IconTextInput';

import { validateRegisterUserInput } from '../../validations/auth/registerUserFormValidator';
import UserGenderSelect from '../Auth/UserGenderSelect';

class RegisterUserForm extends Component {
  onSubmit = formValues => {
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
            <h5 className="ml-4">User register form</h5>
          </Col>
        </Row>
        <Row className="margin">
          <Field
            type="email"
            name="email"
            size="12"
            component={IconTextInput}
            identifier="email"
            icon="person_outline"
            label="email"
          />
        </Row>
        <Row className="margin">
          <Field
            type="text"
            name="firstname"
            size="12"
            component={IconTextInput}
            identifier="firstname"
            icon="person_outline"
            label="firstname"
          />
        </Row>
        <Row className="margin">
          <Field
            type="text"
            name="lastname"
            size="12"
            component={IconTextInput}
            identifier="lastname"
            icon="person_outline"
            label="Lastname"
          />
        </Row>
        <Row className="margin">
          <Field
            type="number"
            name="age"
            size="12"
            component={IconTextInput}
            identifier="age"
            icon="person_outline"
            label="Age"
          />
        </Row>
        <Row className="margin">
          {/* TODO: icon */}
          <Field
            name="gender"
            identifier="gender"
            component={UserGenderSelect}
            label="Gender"
          >
            <option disabled>Please select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </Row>
        <Row className="margin">
          <Field
            type="password"
            password
            name="password"
            size="6"
            component={IconTextInput}
            identifier="password"
            icon="lock_outline"
            label="Password"
          />
          <Field
            type="password"
            password
            name="confirmPassword"
            size="6"
            component={IconTextInput}
            identifier="confirmPassword"
            icon="lock_outline"
            label="Confirm Password"
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

const validate = formValues => {
  return validateRegisterUserInput(formValues);
};

export default reduxForm({
  form: 'userRegisterForm',
  validate
})(RegisterUserForm);
