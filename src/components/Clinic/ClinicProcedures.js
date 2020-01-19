import React, { Component } from "react";
import { Icon, Row, Col } from "react-materialize";
class ClinicProcedures extends Component {
  renderProcedures = () => {
    const { procedures } = this.props;
    return procedures.map(p => {
      return (
        <Col s={4}>
          <Row className="center-align">
            <Icon>{p.icon}</Icon>
          </Row>
          <Row className="center-align">{p.name}</Row>
        </Col>
      );
    });
  };
  render() {
    return <Row>{this.renderProcedures()}</Row>;
  }
}

export default ClinicProcedures;
