import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Section, Row, Col } from 'react-materialize';

import { registerUser } from '../../actions/authActions';
import { MAIN_APP_URL } from '../../routes';
import '../Admin/Auth/RegisterClinic.css';

import RegisterUserForm from '../Auth/RegisterUserForm';

class RegisterUser extends Component {
  onSubmit = async formValues => {
    await this.props.registerUser(formValues);
    this.props.history.push(MAIN_APP_URL);
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
                  <RegisterUserForm onSubmit={this.onSubmit} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

RegisterUser.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(RegisterUser);
