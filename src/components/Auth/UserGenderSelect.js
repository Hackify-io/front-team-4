import React, { Component } from 'react';
import DropdownSelect from '../common/Inputs/DropdownSelect';

class UserGenderForm extends Component {
  render() {
    const options = ['male', 'female'];
    return (
      <DropdownSelect placeholder="gender" align="center" items={options} />
    );
  }
}
export default UserGenderForm;
