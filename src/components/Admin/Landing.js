import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getClinic } from './../../actions/clinicActions';
class Landing extends Component {
  async componentDidMount() {
    const { currentUser } = this.props;
    await this.props.getClinic(currentUser.clinicId);
  }
  render() {
    return (
      <div>
        <h1>Welcome Mr Clinic</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentClinic: state.clinic.currentClinic,
    currentUser: state.auth.user
  };
};
export default connect(mapStateToProps, { getClinic })(Landing);
