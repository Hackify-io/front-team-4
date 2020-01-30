import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAppointments,
  getClinic,
  submitAppointment
} from './../actions/clinicActions';
import { DatePicker, TimePicker, Row, Col, Button } from 'react-materialize';
import ProceduresAutocomplete from './AutoCompletes/ProceduresAutocomplete';

class Appointment extends Component {
  state = {
    selectedProcedure: null,
    date: null,
    time: null
  };
  async componentDidMount() {
    const { clinicId } = this.props.match.params;
    await this.props.getClinic(clinicId);
    await this.props.getAppointments(clinicId);
  }
  onProcedureAutoComplete = procedure => {
    this.setState({ selectedProcedure: procedure });
  };

  onTimeSelect = time => {
    this.setState({
      time: time
    });
  };

  onDateSelect = date => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let fullYear = year + '/' + month + '/' + dt;
    this.setState({
      date: fullYear
    });
  };

  onAppointmentSubmit = () => {
    const { selectedProcedure, date, time } = this.state;
    let newAppointment = {
      selectedProcedure,
      date,
      time
    };
    console.log(newAppointment);
    // this.props.submitAppointment(newAppointment);
  };

  render() {
    const { clinic } = this.props;
    return (
      <div>
        <Row>Set Your Appointment</Row>
        <Row>
          <ProceduresAutocomplete
            proceduresDefault={clinic ? clinic.procedures : null}
            onAutocomplete={this.onProcedureAutoComplete}
          />
          <Row>
            <DatePicker
              options={{
                autoClose: true,
                container: null,
                defaultDate: null,
                disableDayFn: null,
                disableWeekends: false,
                events: [],
                firstDay: 0,
                format: 'mmm dd, yyyy',
                i18n: {
                  cancel: 'Cancel',
                  clear: 'Clear',
                  done: 'Ok',
                  months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                  ],
                  monthsShort: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ],
                  nextMonth: '›',
                  previousMonth: '‹',
                  weekdays: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                  ],
                  weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                  weekdaysShort: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                  ]
                },
                isRTL: false,
                maxDate: null,
                minDate: null,
                onClose: null,
                onDraw: null,
                onOpen: null,
                onSelect: date => {
                  this.onDateSelect(date);
                },
                parse: null,
                setDefaultDate: false,
                showClearBtn: false,
                showDaysInNextAndPreviousMonths: false,
                showMonthAfterYear: false,
                yearRange: 10
              }}
            />
            <Col s={6}>
              <TimePicker
                options={{
                  autoClose: true,
                  container: null,
                  defaultTime: 'now',
                  duration: 350,
                  fromNow: 0,
                  i18n: {
                    cancel: 'Cancel',
                    clear: 'Clear',
                    done: 'Ok'
                  },
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  onSelect: time => {
                    this.onTimeSelect(time);
                  },
                  showClearBtn: false,
                  twelveHour: true,
                  vibrate: true
                }}
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <Button onClick={this.onAppointmentSubmit}>
            Schedule Appointment
          </Button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.clinic.appointments,
    clinic: state.clinic.currentClinic
  };
};
export default connect(mapStateToProps, {
  getClinic,
  getAppointments,
  submitAppointment
})(Appointment);
