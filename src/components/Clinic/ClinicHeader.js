import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Rate from './Rate';
class ClinicHeader extends Component {
  render() {
    const { name, rate } = this.props;
    return (
      <Row className="valign-wrapper">
        <Col s={8}>
          <h2>{name}</h2>
        </Col>
        <Col s={4}>
          <Rate rate={rate} />
        </Col>
      </Row>
    );
  }
}

export default ClinicHeader;
