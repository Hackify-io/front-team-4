import React, { Component, Fragment } from "react";

export default class ClinicList extends Component {
  renderClinics = () => {
    const { clinics } = this.props;
    return clinics.map(c => {
      return (
        <h3 key={c.id} className="center-align">
          {c.id}
        </h3>
      );
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Search Results</h1>
        {this.renderClinics()};
      </Fragment>
    );
  }
}
