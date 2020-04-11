import 'react-dates/initialize';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class DatePicker extends Component {
  state = { date: null, onFocusChage: false };
  render() {
    const { onDateSelect } = this.props;
    return (
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        focused={this.state.focused} // PropTypes.bool
        onDateChange={(date) => {
          const cleanSelectedDay = date ? date._d : null;
          onDateSelect(cleanSelectedDay);
          this.setState({ date: date });
        }}
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
      />
    );
  }
}
