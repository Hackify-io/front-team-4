import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Segment } from "semantic-ui-react";
import PlacesAutoComplete from "./../common/Inputs/AutoCompletes/PlacesAutoComplete";
import SpecialtyAutoComplete from "./../common/Inputs/AutoCompletes/SpecialtyAutoComplete";
import { getClinics } from "./../../actions/clinicActions";
class SearchClinicForm extends Component {
  state = {
    selectedPlace: null,
    selectedSpecialty: null,
    selectedDay: null
  };
  handlePlacesAutoComplete = places => {
    this.setState({ selectedPlace: places });
  };
  handleSpecialtiesAutoComplete = specialties => {
    this.setState({ selectedSpecialty: specialties });
  };

  handleDateSelect = selectedDay => {
    this.setState({ selectedDay: selectedDay });
  };
  onSearchClick = async () => {
    const { getClinics } = this.props;
    const { selectedPlace, selectedSpecialty } = this.state;
    await getClinics(selectedSpecialty, selectedPlace);
  };

  render() {
    const { places, specialties } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <PlacesAutoComplete
              places={places}
              onPlacesAutoComplete={this.handlePlacesAutoComplete}
            />
          </Form.Field>
          <Form.Field>
            <SpecialtyAutoComplete
              specialties={specialties}
              onSpecialtyAutoComplete={this.handleSpecialtiesAutoComplete}
            />
          </Form.Field>
          <Form.Field control={Button} primary onClick={this.onSearchClick}>
            Search
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places,
    specialties: state.procedure.procedures
  };
};
export default connect(mapStateToProps, { getClinics })(SearchClinicForm);
