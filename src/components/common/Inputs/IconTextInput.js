import React, { Component } from 'react';
import classnames from 'classnames';

class IconTextInput extends Component {
  render() {
    const { identifier, icon, label, name, meta, input, type } = this.props;
    const renderError = ({ error, touched }) => {
      if (error && touched) {
        return (
          <div>
            <div id={`${name}-error`} className="error">
              {error}
            </div>
          </div>
        );
      }
    };

    const inputClassName = classnames('validate', {
      invalid: meta.error && meta.touched,
      valid: !meta.error && meta.touched
    });

    const iconClassName = classnames('material-icons prefix pt-2', {
      'red-text': meta.error && meta.touched,
      'green-text': !meta.error && meta.touched
    });
    return (
      <div className="input-field col s12">
        <i className={iconClassName}>{icon}</i>
        <input
          className={inputClassName}
          {...input}
          id={identifier}
          name={name}
          type={type}
        />
        <label htmlFor={identifier} className="center-align">
          {label}
        </label>
        {renderError(meta)}
      </div>
    );
  }
}

export default IconTextInput;
