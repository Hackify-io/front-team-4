import React, { Component } from "react";
import { connect } from "react-redux";
import { getAppointments, getClinic } from "./../actions/clinicActions";
import { DatePicker, TimePicker, Row, Col } from "react-materialize";
import ProceduresAutocomplete from "./AutoCompletes/ProceduresAutocomplete";

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
  render() {
    return (
      <div>
        <Row>Set Your Appointment</Row>
        <Row>
          <ProceduresAutocomplete
            onAutocomplete={this.onProcedureAutoComplete}
          />
          <Row>
            <Col s={6}>Choose Date</Col>
            <Col s={6}>Choose your Time</Col>
          </Row>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.clinic.appointments
  };
};
export default connect(mapStateToProps, { getClinic, getAppointments })(
  Appointment
);
