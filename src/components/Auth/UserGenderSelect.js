import React, { Component } from 'react';
import DropdownSelect from '../common/Inputs/DropdownSelect';

class UserGenderForm extends Component {
  render() {
    const { onHandleSelect, input, ...rest } = this.props;
    return <DropdownSelect align="left" {...rest} {...input} />;
  }
}
export default UserGenderForm;
