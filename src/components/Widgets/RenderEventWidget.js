import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import EventWidget from "./EventWidget";
import { getRecentEvents } from "../../actions/eventActions";
class RenderEventWidget extends Component {
  async componentDidMount() {
    await this.props.getRecentEvents();
  }
  renderCards = () => {
    const data = this.props.events;
    let cards = [];
    cards = data
      ? data.map((event) => {
          return (
            <EventWidget
              title={event.title}
              date={event.date}
              img={
                "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1350441335.jpg"
              }
              description={event.description}
            />
          );
        })
      : null;
    return cards;
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

const mapStateToProps = (state) => {
  return {
    events: state.events.recentEvents,
  };
};

export default connect(mapStateToProps, { getRecentEvents })(RenderEventWidget);
