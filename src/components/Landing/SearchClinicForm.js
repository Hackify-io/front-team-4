import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Segment } from "semantic-ui-react";
import PlacesAutoComplete from "./../common/Inputs/AutoCompletes/PlacesAutoComplete";
import SpecialtyAutoComplete from "./../common/Inputs/AutoCompletes/SpecialtyAutoComplete";
import DatePicker from "./../core/DatePicker";
import { getClinics } from "./../../actions/clinicActions";
class SearchClinicForm extends Component {
  state = {
    SelectedPlace: null,
    SelectedSpecialty: null,
    startDate: null,
    endDate: null
  };
  handlePlacesAutoComplete = places => {
    this.setState({ SelectedPlace: places });
  };
  handleSpecialtiesAutoComplete = specialties => {
    this.setState({ SelectedSpecialty: specialties });
  };

  handleDateSelect = (start, end) => {
    this.setState({ startDate: start, endDate: end });
  };
  onSearchClick = async () => {
    const { getClinics } = this.props;
    const { SelectedPlace, SelectedSpecialty } = this.state;
    await getClinics(SelectedSpecialty, SelectedPlace);
  };

  render() {
    const { places, specialties } = this.props;
    return (
      <Segment compact>
        <Form>
          <Form.Group>
            <PlacesAutoComplete
              places={places}
              onPlacesAutoComplete={this.handlePlacesAutoComplete}
            />
          </Form.Group>
          <Form.Group>
            <SpecialtyAutoComplete
              specialties={specialties}
              onSpecialtyAutoComplete={this.handleSpecialtiesAutoComplete}
            />
          </Form.Group>
          <Form.Group>
            <DatePicker onDateSelect={this.handleDateSelect} />
          </Form.Group>
          <Form.Field control={Button} onClick={this.onSearchClick}>
            Submit
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
