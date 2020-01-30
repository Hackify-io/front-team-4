import React, { Component } from 'react';
import ClinicInfoForm from './ClinicInfoForm';
export default class ClinicInfo extends Component {
  render() {
    return (
      <div>
        <h2>Edit the clinic info</h2>
        <ClinicInfoForm />
      </div>
    );
  }
}
