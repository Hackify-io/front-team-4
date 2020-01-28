import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_BUTTON_COLOR } from './../utils/colors';
export default class ClinicList extends Component {
  renderClinics = () => {
    const { clinics } = this.props;
    return clinics
      ? clinics.map(c => {
          return (
            <Link
              key={c.id}
              to={`/clinic/${c.id}`}
              className={`btn btn-large ${PRIMARY_BUTTON_COLOR} center-align`}
            >
              {c.id}
            </Link>
          );
        })
      : null;
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
