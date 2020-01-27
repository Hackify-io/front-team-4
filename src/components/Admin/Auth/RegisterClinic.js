import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Section, Row, Col } from 'react-materialize';
import { registerClinic } from '../../../actions/authActions';
import { ADMIN_MAIN_APP_URL } from '../../../routes';
import './RegisterClinic.css';

import RegisterClinicForm from '../../Admin/Auth/RegisterClinicForm';

class Login extends Component {
  onSubmit = async formValues => {
    console.log(formValues, ADMIN_MAIN_APP_URL);
    //await this.props.registerClinic(formValues);
    //this.props.history.push(ADMIN_MAIN_APP_URL);
  };

  render() {
    return (
      <Section className="register-bg">
        <Row className="row">
          <Col s={12}>
            <div className="container">
              <Row id="register-page">
                <Col
                  s={12}
                  m={6}
                  className="z-depth-4 card-panel border-radius-6 login-card bg-opacity-8"
                >
                  <RegisterClinicForm onSubmit={this.onSubmit} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

Login.propTypes = {
  registerClinic: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerClinic })(Login);
