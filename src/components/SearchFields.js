//Import Modules
import React, { Component } from "react";
import { Row, Col, Button } from "react-materialize";
//Import Components
import PlacesAutocomplete from "./AutoCompletes/PlacesAutocomplete";
import ProceduresAutocomplete from "./AutoCompletes/ProceduresAutocomplete";

class SearchFields extends Component {
  state = {
    selectedPlace: null,
    selectedProcedure: null
  };
  onPlacesAutoComplete = place => {
    this.setState({ selectedPlace: place });
  };
  onProcedureAutoComplete = procedure => {
    this.setState({ selectedProcedure: procedure });
  };

  onSearchSubmit = () => {
    const { onSearchClick } = this.props;
    const { procedure, place } = this.state;
    console.log(this.state.procedure, place);
    onSearchClick(procedure, this.state.place);
  };

  render() {
    return (
      <Row className=" center-align valign-wrapper">
        <ProceduresAutocomplete onAutocomplete={this.onProcedureAutoComplete} />
        <PlacesAutocomplete onAutocomplete={this.onPlacesAutoComplete} />
        <Col s={2}>
          <Button onClick={this.onSearchSubmit}>Search</Button>
        </Col>
      </Row>
    );
  }
}

export default SearchFields;
