import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { getFeaturedDoctors } from './../../actions/doctorActions';
import DoctorWidget from './DoctorWidget';
class RenderDoctorWidget extends Component {
  async componentDidMount() {
    await this.props.getFeaturedDoctors();
  }
  renderCards = () => {
    const data = this.props.doctors;

    let cards = [];
    cards = data
      ? data.map((doctor) => {
          return (
            <DoctorWidget
              img={doctor.pic}
              name={doctor.name}
              resume={doctor.degree}
              experience={doctor.expertise}
              location={'Sidney'}
            />
          );
        })
      : null;
    return cards;
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
    doctors: state.doctors.featuredDoctors,
  };
};

export default connect(mapStateToProps, { getFeaturedDoctors })(
  RenderDoctorWidget
);
