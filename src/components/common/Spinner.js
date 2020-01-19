import React, { Component } from "react";
import { Row, Col, Preloader } from "react-materialize";
class Spinner extends Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <Preloader active color="blue" flashing={false} size="big" />
        </Col>
      </Row>
    );
  }
}

export default Spinner;
