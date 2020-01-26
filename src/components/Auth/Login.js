import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from './../../actions/authActions';
import { MAIN_APP_URL } from './../../routes';
import './Login.css';

import LoginForm from './LoginForm';

class Login extends Component {
  onSubmit = async formValues => {
    console.log(formValues);
    await this.props.loginUser(formValues);
    this.props.history.push(MAIN_APP_URL);
  };

  render() {
    return (
      <section className="login-bg">
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div id="login-page" className="row">
                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                  <LoginForm onSubmit={this.onSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
