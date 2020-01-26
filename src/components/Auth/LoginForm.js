import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import IconTextInput from '../common/Inputs/IconTextInput';
import { validateLoginInput } from '../../validations/auth/loginFormValidator';

class LoginForm extends Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div>
          <div className="error">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ icon, input, label, meta }) => {
    const className = classnames('', {
      error: meta.error && meta.touched,
      valid: !meta.error && meta.touched
    });
    return (
      <div className="input-field col s12">
        <i className="material-icons prefix pt-2">{icon}</i>
        <input className={className} {...input} autoComplete="off" />
        <label htmlFor="title" className="center-align">
          {label}
        </label>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="row">
          <div className="input-field col s12">
            <h5 className="ml-4">Sign in</h5>
          </div>
        </div>
        <div className="row margin">
          <Field
            type="text"
            name="email"
            component={IconTextInput}
            identifier="email"
            icon="person_outline"
            label="Username"
          />
        </div>
        <div className="row margin">
          <Field
            type="password"
            name="password"
            component={IconTextInput}
            identifier="password"
            icon="lock_outline"
            label="Password"
          />
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button className="btn waves-effect waves-light border-round gradient-45deg-blue-grey-blue col s12">
              Login
            </button>
          </div>
        </div>
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
