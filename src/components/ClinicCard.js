import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
import { CLINICS_URL } from './../routes';
export default class ClinicCard extends Component {
  render() {
    const { clinic } = this.props;
    return (
      <Row>
        <Col s={12}>
          <Card
            actions={[
              <Link key="1" to={`${CLINICS_URL}/${clinic._id}`}>
                Visit
              </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                style={{ maxWidth: '300px' }}
                image="https://materializecss.com/images/sample-1.jpg"
              />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h3>{clinic.name}</h3>
            {clinic.description}
          </Card>
        </Col>
      </Row>
    );
  }
}
