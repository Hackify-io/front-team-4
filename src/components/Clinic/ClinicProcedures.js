import React, { Component, Fragment } from 'react';
import { Icon, Row, Col } from 'react-materialize';
class ClinicProcedures extends Component {
  renderProcedures = () => {
    const { procedures } = this.props;
    return procedures.map((p) => {
      return (
        <Col key={p.name} s={4}>
          <Row className="center-align">
            <Icon>{p.icon}</Icon>
          </Row>
          <Row className="center-align">{p.name}</Row>
        </Col>
      );
    });
  };
  render() {
    return (
      <Fragment>
        <Row>
          <h5>Our Procedures:</h5>
        </Row>
        <Row>{this.renderProcedures()}</Row>
      </Fragment>
    );
  }
}

export default ClinicProcedures;
