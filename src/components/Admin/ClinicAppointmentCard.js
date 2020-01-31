import React, { Component } from 'react';
import { Row, Col, Card, Icon, Button } from 'react-materialize';

class ClinicAppointmentCard extends Component {
  render() {
    const { date, time, procedure, username, status } = this.props;
    return (
      <Row>
        <Col s={12}>
          <Card
            actions={
              status === 'Pending'
                ? [
                    <Button className="green">Accept</Button>,
                    <Button className="red">Reject</Button>
                  ]
                : null
            }
            className="purple lighten-2 z-depth-3"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title={`${username} - ${status}`}
          >
            {`${date.toString()} - ${time}: ${procedure}`}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ClinicAppointmentCard;
