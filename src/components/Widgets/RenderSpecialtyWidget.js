import React, { Component } from "react";
import SpecialtyWidget from "./SpecialtyWidget";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
class RenderSpecialtyWidget extends Component {
  renderCards = () => {
    const model = "specialty";
    const data = this.props[model];
    return data.map(specialty => (
      <SpecialtyWidget
        img={specialty.specialty.imageUrl}
        specialty={specialty.specialty.name}
      />
    ));
  };

  render() {
    const { numberOfColumns } = this.props;
    return (
      <div>
        <Card.Group stackable itemsPerRow={numberOfColumns}>
          {this.renderCards()}
        </Card.Group>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    specialty: state.procedure.procedures
  };
};

export default connect(mapStateToProps, {})(RenderSpecialtyWidget);
