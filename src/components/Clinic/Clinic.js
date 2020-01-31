import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClinic } from './../../actions/clinicActions';
import { CLINICS_URL } from './../../routes';
import Spinner from './../common/Spinner';
import Section from './../common/Section';
import ClinicHeader from './ClinicHeader';
import ClinicShow from './ClinicShow';
import ClinicProcedures from './ClinicProcedures';
class Clinic extends Component {
  async componentDidMount() {
    const { clinicId } = this.props.match.params;
    await this.props.getClinic(clinicId);
  }

  renderClinic = () => {
    const { clinic } = this.props;
    let total = 0;
    clinic.feedbacks.forEach(f => {
      total = total + f.rate;
    });
    let averageRate = total / clinic.feedbacks.length;
    const url = `${CLINICS_URL}/${clinic._id}/appointment`;
    return (
      <div className="container">
        <ClinicHeader name={clinic.name} rate={averageRate} />
        <Section name="clinic-show">
          <ClinicShow description={clinic.description} />
        </Section>
        <Section name="clinic-procedures">
          <ClinicProcedures procedures={clinic.procedures} />
        </Section>
        <Section name="appointment">
          <Link to={url} className="btn btn-large extended">
            Schedule an appointment
          </Link>
        </Section>
      </div>
    );
  };
  render() {
    const { clinic } = this.props;
    return clinic ? this.renderClinic() : <Spinner />;
  }
}

const mapStateToProps = state => {
  return {
    clinic: state.clinic.currentClinic
  };
};
export default connect(mapStateToProps, { getClinic })(Clinic);
