import React, { Component } from 'react';
import { Col, Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div
        className="teal lighten-3 valign-wrapper"
        style={{ height: '100vh' }}
      >
        <Row>
          <Col s={12}>
            <h2>Are you a patient or a clinic?</h2>
          </Col>
          <Col s={12}>
            <Row>
              <Col s={6}>
                <Button>
                  <Link className="white-text" to="/main">
                    USER
                  </Link>
                </Button>
              </Col>
              <Col s={6}>
                <Button>
                  <Link className="white-text" to="/admin">
                    CLINIC
                  </Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
