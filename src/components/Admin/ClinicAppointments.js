import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { getAppointments } from './../../actions/clinicActions';
import { getProcedures } from './../../actions/procedureActions';
import ClinicAppointmentCard from './ClinicAppointmentCard';
class ClinicAppointments extends Component {
  async componentDidMount() {
    await this.props.getProcedures();
    if (this.props.clinic) {
      await this.props.getAppointments(this.props.clinic._id);
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.clinic !== this.props.clinic) {
      await this.props.getAppointments(this.props.clinic._id);
    }
  }

  renderAppointments = () => {
    const { appointments, procedures } = this.props;
    return appointments.map((a) => {
      const currentProcedure = procedures.find((p) => p._id === a.procedure);
      return (
        <ClinicAppointmentCard
          id={a._id}
          date={a.date}
          time={a.time}
          procedure={currentProcedure.name}
          username={a.userName}
          status={a.status}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Appointments</h1>
        <Row>{this.renderAppointments()}</Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointments: state.clinic.appointments,
    clinic: state.clinic.currentClinic,
    procedures: state.procedure.procedures,
  };
};

export default connect(mapStateToProps, { getAppointments, getProcedures })(
  ClinicAppointments
);
