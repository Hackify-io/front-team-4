import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import DoctorWidget from "./DoctorWidget";
class RenderDoctorWidget extends Component {
  renderCards = () => {
    const data = this.props;
    console.log(data);
    // return data.map(specialty => (
    //   <DoctorWidget
    //     key={specialty.specialty._id}
    //     img={specialty.specialty.imageUrl}
    //     specialty={specialty.specialty.name}
    //   />
    // ));
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
//Conectarlo al store para que tome la data de los doctores
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RenderDoctorWidget);
