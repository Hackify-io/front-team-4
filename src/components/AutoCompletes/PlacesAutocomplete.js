import React, { Component } from "react";
import { Autocomplete, Icon } from "react-materialize";

//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";

class PlacesAutocomplete extends Component {
  render() {
    const { onAutocomplete } = this.props;
    return (
      <Autocomplete
        s={3}
        className={MAIN_COLOR_FONT}
        icon={<Icon>map</Icon>}
        options={{
          data: {
            Tijuana: null,
            Guadalajara: null,
            Cancun: null,
            Monterey: null
          },
          onAutocomplete: place => {
            onAutocomplete(place);
          }
        }}
        placeholder="Location..."
      />
    );
  }
}

export default PlacesAutocomplete;
