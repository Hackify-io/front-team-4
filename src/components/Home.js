import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import { Button } from 'semantic-ui-react';
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
                <Button as={Link} to="/main" primary>
                    USER
                </Button>
              </Col>
              <Col s={6}>
                <Button as={Link} to="/admin" primary>
                    CLINIC
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
