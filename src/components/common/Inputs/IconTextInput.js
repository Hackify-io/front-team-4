import React, { Component } from 'react';
import { Col, Icon, TextInput } from 'react-materialize';
import classnames from 'classnames';

class IconTextInput extends Component {
  render() {
    const {
      identifier,
      icon,
      label,
      name,
      meta,
      input,
      type,
      ...rest
    } = this.props;

    const inputClassName = classnames('validate', {
      invalid: meta.error && meta.touched,
      valid: !meta.error && meta.touched
    });

    const iconClassName = classnames('prefix', {
      'red-text': meta.error && meta.touched,
      'green-text': !meta.error && meta.touched
    });
    return (
      <Col className="input-field" s={12}>
        <TextInput
          s={12}
          icon={<Icon className={iconClassName}>{icon}</Icon>}
          inputClassName={inputClassName}
          id={identifier}
          label={label}
          error={meta.error}
          {...rest}
          {...input}
        />
      </Col>
    );
  }
}

export default IconTextInput;
