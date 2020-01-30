import React, { Component } from 'react';
import history from './../../history';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Icon, Button } from 'react-materialize';
import IconTextInput from './../common/Inputs/IconTextInput';
import { connect } from 'react-redux';
import { ADMIN_MAIN_APP_URL } from './../../routes';
import {
  addProcedureToClinic,
  removeProcedureFromClinic,
  updateClinic
} from './../../actions/clinicActions';
import { getProcedures } from './../../actions/procedureActions';
import ProceduresAutocomplete from './../AutoCompletes/ProceduresAutocomplete';

class ClinicInfoForm extends Component {
  state = {
    selectedProcedure: null
  };
  async componentDidMount() {
    const { procedures } = this.props;
    if (procedures.length === 0) {
      await this.props.getProcedures();
    }
  }

  onProcedureAutoComplete = procedure => {
    this.setState({ selectedProcedure: procedure });
  };

  onAddProcedureButtonClick = async () => {
    const { selectedProcedure } = this.state;
    const { clinic } = this.props;
    await this.props.addProcedureToClinic(clinic._id, selectedProcedure._id);
  };

  onRemoveProcedureClick = procedureId => {
    const { clinic } = this.props;
    this.props.removeProcedureFromClinic(clinic._id, procedureId);
  };

  renderAutocomplete = () => {
    return (
      <Row className="valign-wrapper">
        <ProceduresAutocomplete
          size={12}
          onAutocomplete={this.onProcedureAutoComplete}
        />
        <Col s={12}>
          <Button onClick={this.onAddProcedureButtonClick}>
            Add Procedure{' '}
          </Button>
        </Col>
      </Row>
    );
  };

  renderProcedures = () => {
    const { clinic } = this.props;
    let { procedures } = clinic;
    return procedures
      ? procedures.map(p => {
          return (
            <div key={p._id} className="col">
              <span className="badge red white-text">{p.name}</span>
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

  onSubmit = async formValues => {
    const { description, telephone, address } = formValues;
    let { clinic } = this.props;
    clinic.description = description;
    clinic.telephone = telephone;
    clinic.address = address;
    await this.props.updateClinic(clinic);
    history.push(ADMIN_MAIN_APP_URL);
  };

  renderClinicForm = () => {
    const { clinic } = this.props;
    return (
      <div>
        <Row>
          <Col s={12}>
            <h4>Add or remove procedures</h4>
          </Col>
        </Row>
        <Row className="valign-wrapper">{this.renderProcedures()}</Row>
        {this.renderAutocomplete()}
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Row>
            <Col s={12} className="input-field">
              <h5 className="ml-4">Name: {clinic.name}</h5>
            </Col>
          </Row>
          <Row className="margin">
            <Field
              type="text"
              name="address"
              size={12}
              component={IconTextInput}
              identifier="address"
              icon="add_location"
              label="Address"
            />
          </Row>
          <Row className="margin">
            <Field
              type="text"
              name="telephone"
              size={12}
              component={IconTextInput}
              identifier="telephone"
              icon="contact_phone"
              label="Telephone"
            />
          </Row>
          <Row className="margin">
            <Field
              type="text"
              name="description"
              size={12}
              component={IconTextInput}
              identifier="description"
              icon="short_text"
              label="Description"
            />
          </Row>
          <Row>
            <Col className="input-field" s={12}>
              <Button waves="light" className="extended">
                Submit Changes
              </Button>
            </Col>
          </Row>
        </form>
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
    clinic: state.clinic.currentClinic,
    procedures: state.procedure.procedures,
    initialValues: state.clinic.currentClinic
  };
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ClinicInfoForm = reduxForm({
  form: 'editClinicForm' // a unique identifier for this form
})(ClinicInfoForm);

// You have to connect() to any reducers that you wish to connect to yourself
ClinicInfoForm = connect(
  mapStateToProps,
  {
    addProcedureToClinic,
    removeProcedureFromClinic,
    getProcedures,
    updateClinic
  } // bind account loading action creator
)(ClinicInfoForm);

export default ClinicInfoForm;
