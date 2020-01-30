import React, { Component } from 'react';
import { Footer } from 'react-materialize';

class LayoutFooter extends Component {
  render() {
    return (
      <Footer className="example" copyrights="&MedTravel 2020">
        <h5 className="white-text">Site still under construction</h5>
        <p className="grey-text text-lighten-4">
          Please be patient, the site is under construction
        </p>
      </Footer>
    );
  }
}

export default LayoutFooter;
