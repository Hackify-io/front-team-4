//Import Modules
import React, { Component } from "react";
import { connect } from "react-redux";

import { Autocomplete, Icon } from "react-materialize";
//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";

class PlacesAutocomplete extends Component {
  render() {
    const { onAutocomplete, places } = this.props;
    let placesData = {};
    places.forEach(p => {
      placesData[p] = null;
    });
    return (
      <Autocomplete
        s={3}
        className={MAIN_COLOR_FONT}
        icon={<Icon>map</Icon>}
        options={{
          data: placesData,
          onAutocomplete: place => {
            onAutocomplete(place);
          }
        }}
        placeholder="Location..."
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};
export default connect(mapStateToProps, {})(PlacesAutocomplete);
