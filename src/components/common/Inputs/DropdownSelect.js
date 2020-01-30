import React, { Component } from 'react';
import { Select } from 'react-materialize';

class DropdownSelect extends Component {
  render() {
    const { align, children, ...rest } = this.props;
    return (
      <Select
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
        {...rest}
      >
        {children}
      </Select>
    );
  }
}

export default DropdownSelect;
