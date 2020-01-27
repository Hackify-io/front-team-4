import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Section, Row, Col } from 'react-materialize';
import { loginClinic } from '../../../actions/authActions';
import { ADMIN_MAIN_APP_URL } from '../../../routes';
import './LoginClinic.css';

import LoginForm from '../../Admin/Auth/LoginClinicForm';

class Login extends Component {
  onSubmit = async formValues => {
    await this.props.loginClinic(formValues);
    this.props.history.push(ADMIN_MAIN_APP_URL);
  };

  render() {
    return (
      <Section className="login-bg">
        <Row>
          <Col s={12}>
            <div className="container">
              <Row id="login-page">
                <Col
                  s={12}
                  m={6}
                  l={4}
                  className="z-depth-4 card-panel border-radius-6 login-card bg-opacity-8"
                >
                  <LoginForm onSubmit={this.onSubmit} />
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
  loginClinic: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginClinic })(Login);
