import React, { Component } from 'react';
import { Icon, TextInput } from 'react-materialize';
import classnames from 'classnames';

class IconTextInput extends Component {
  render() {
    const {
      identifier,
      icon,
      size,
      label,
      name,
      meta,
      input,
      type,
      ...rest
    } = this.props;

    const inputClassName = classnames('validate', {
      invalid: meta.error && meta.touched,
      valid: !meta.error && meta.touched,
    });

    const iconClassName = classnames('prefix', {
      'red-text': meta.error && meta.touched,
      'green-text': !meta.error && meta.touched,
    });
    return (
      <TextInput
        s={size}
        icon={<Icon className={iconClassName}>{icon}</Icon>}
        inputClassName={inputClassName}
        id={identifier}
        label={label}
        error={meta.error}
        {...rest}
        {...input}
      />
    );
  }
}

export default IconTextInput;
