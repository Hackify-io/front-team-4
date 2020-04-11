import React, { Component, Fragment } from 'react';
import ClinicCard from './ClinicCard';
import { Header } from 'semantic-ui-react';
export default class ClinicList extends Component {
  renderClinics = () => {
    const { clinics } = this.props;
    return clinics
      ? clinics.map((c) => {
          return <ClinicCard key={c._id} clinic={c} />;
        })
      : null;
  };
  render() {
    return (
      <Fragment>
        <Header as="h4" dividing textAlign="center" color="teal">
          Search Results
        </Header>
        {this.renderClinics()}
      </Fragment>
    );
  }
}
