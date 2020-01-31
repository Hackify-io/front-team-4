import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppointments } from './../../actions/clinicActions';
import { getProcedures } from './../../actions/procedureActions';
import ClinicAppointmentCard from './ClinicAppointmentCard';
class ClinicAppointments extends Component {
  async componentDidMount() {
    await this.props.getProcedures();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.clinic !== this.props.clinic) {
      await this.props.getAppointments(this.props.clinic._id);
    }
  }

  renderAppointments = () => {
    const { appointments, procedures } = this.props;
    return appointments.map(a => {
      const currentProcedure = procedures.find(
        p => p._id === '5e2ceb9417d557234c53d3ad'
      );
      console.log(a);
      return (
        <ClinicAppointmentCard
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
      <div>
        <h1>Appointments</h1>
        {this.renderAppointments()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.clinic.appointments,
    clinic: state.clinic.currentClinic,
    procedures: state.procedure.procedures
  };
};

export default connect(mapStateToProps, { getAppointments, getProcedures })(
  ClinicAppointments
);
