import React, { Component, Fragment } from 'react';
import ClinicCard from './ClinicCard';
export default class ClinicList extends Component {
  renderClinics = () => {
    const { clinics } = this.props;
    return clinics
      ? clinics.map(c => {
          return <ClinicCard key={c._id} clinic={c} />;
        })
      : null;
  };
  render() {
    return (
      <Fragment>
        <h3>Search Results</h3>
        {this.renderClinics()}
      </Fragment>
    );
  }
}
