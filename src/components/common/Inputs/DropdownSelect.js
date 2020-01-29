import React, { Component } from 'react';
import { Select } from 'react-materialize';

class DropdownSelect extends Component {
  render() {
    const { placeholder, align, items } = this.props;
    return (
      <Select
        onChange={function noRefCheck() {}}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: align,
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 25
          }
        }}
        label={placeholder}
        value=""
      >
        <option disabled>Please select</option>
        {items.map(item => (
          <option value="item">{item}</option>
        ))}
      </Select>
    );
  }
}
export default DropdownSelect;
