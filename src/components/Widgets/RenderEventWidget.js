import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import EventWidget from "./EventWidget";
class RenderEventWidget extends Component {
  renderCards = () => {
    const data = this.props.event;
    // return data.map(event => (
    //   <EventWidget
    //     title={event.title}
    //     date={event.date}
    //     imgEvent={event.imgEvent}
    //     description={event.eventDescription}
    //   />
    // ));
  };
  render() {
    const { numberOfColumns } = this.props;
    return (
      <Card.Group stackable itemsPerRow={numberOfColumns}>
        {this.renderCards()}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RenderEventWidget);
