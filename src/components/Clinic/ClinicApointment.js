import React, { Component } from "react";
import { Row, Col } from "react-materialize";

export default class ClinicApointment extends Component {
  state = {
    procedure: null,
    date: null,
    time: null
  };
  render() {
    return (
      <div className="container">
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
