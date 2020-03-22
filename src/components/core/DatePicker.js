import "react-dates/initialize";
import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
export default class DatePicker extends Component {
  state = { startDate: null, endDate: null };
  render() {
    const { onDateSelect } = this.props;
    return (
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          const cleanStartDate = startDate ? startDate._d : null;
          const cleanEndDate = endDate ? endDate._d : null;
          onDateSelect(cleanStartDate, cleanEndDate);
          this.setState({ startDate, endDate });
        }} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
    );
  }
}
