import React, { Component } from 'react';
import DropdownSelect from '../common/Inputs/DropdownSelect';

class UserGenderForm extends Component {
  render() {
    const { handleOnChange, ...rest } = this.props;
    return (
      <DropdownSelect
        placeholder="gender"
        align="left"
        {...rest}
        onChange={handleOnChange}
      />
    );
  }
}
export default UserGenderForm;
