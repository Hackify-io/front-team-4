import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export default class ClinicList extends Component {
  renderClinics = () => {
    const { clinics } = this.props;
    return clinics.map(c => {
      return (
        <Link
          key={c.id}
          to={`/clinic/${c.id}`}
          className="btn btn-large center-align"
        >
          {c.id}
        </Link>
      );
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Search Results</h1>
        {this.renderClinics()}
      </Fragment>
    );
  }
}
