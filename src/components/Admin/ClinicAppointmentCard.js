import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, Icon, Button } from 'react-materialize';
import { changeAppointmentStatus } from './../../actions/clinicActions';

class ClinicAppointmentCard extends Component {
  onAcceptClick = () => {
    const { id } = this.props;
    this.props.changeAppointmentStatus(id, 'Accepted');
  };

  onRejectClick = () => {
    const { id } = this.props;
    this.props.changeAppointmentStatus(id, 'Rejected');
  };
  render() {
    const { date, time, procedure, username, status } = this.props;
    return (
      <Col s={6}>
        <Card
          actions={
            status === 'Pending'
              ? [
                  <Button
                    key={1}
                    className="green"
                    onClick={this.onAcceptClick}
                  >
                    Accept
                  </Button>,
                  <Button key={2} className="red" onClick={this.onRejectClick}>
                    Reject
                  </Button>,
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { changeAppointmentStatus })(
  ClinicAppointmentCard
);
