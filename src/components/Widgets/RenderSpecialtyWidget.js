import React, { Component } from 'react';
import SpecialtyWidget from './SpecialtyWidget';
import { Container, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
class RenderSpecialtyWidget extends Component {
  renderCards = () => {
    const model = 'specialty';
    const data = this.props[model];
    return data.map((specialty) => (
      <SpecialtyWidget
        key={specialty.specialty._id}
        img={specialty.specialty.imageUrl}
        specialty={specialty.specialty.name}
      />
    ));
  };

  render() {
    const { numberOfColumns } = this.props;
    return (
      <Container>
        <Card.Group stackable itemsPerRow={numberOfColumns}>
          {this.renderCards()}
        </Card.Group>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    specialty: state.procedure.procedures,
  };
};

export default connect(mapStateToProps, {})(RenderSpecialtyWidget);
