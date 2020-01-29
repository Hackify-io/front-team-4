import React, { Component } from 'react';
import { Row, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import {
  addProcedureToClinic,
  removeProcedureFromClinic
} from './../../actions/clinicActions';

class ClinicInfoForm extends Component {
  onRemoveProcedureClick = procedureId => {
    const { clinic } = this.props;
    this.props.removeProcedureFromClinic(clinic._id, procedureId);
  };

  renderProcedures = () => {
    const { clinic } = this.props;
    let { procedures } = clinic;
    return procedures
      ? procedures.map(p => {
          return (
            <div key={p} className="col">
              <span className="new badge red">{p.name}</span>
              <span
                onClick={() => {
                  this.onRemoveProcedureClick(p._id);
                }}
              >
                <Icon>clear</Icon>
              </span>
            </div>
          );
        })
      : null;
  };

  renderClinicForm = () => {
    const { clinic } = this.props;
    return (
      <div>
        <Row className="valign-wrapper">{this.renderProcedures()}</Row>

        {clinic.name}
      </div>
    );
  };

  render() {
    const { clinic } = this.props;
    return clinic ? this.renderClinicForm() : null;
  }
}

const mapStateToProps = state => {
  return {
    clinic: state.clinic.currentClinic
  };
};

export default connect(mapStateToProps, {
  addProcedureToClinic,
  removeProcedureFromClinic
})(ClinicInfoForm);
