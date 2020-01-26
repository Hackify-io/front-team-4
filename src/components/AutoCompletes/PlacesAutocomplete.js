//Import Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'react-materialize';
import Autocomplete from './Autocomplete';
//Import Utils
import { MAIN_COLOR_FONT } from './../../utils/colors';

class PlacesAutocomplete extends Component {
  render() {
    const { onAutocomplete, places } = this.props;
    let placesData = {};
    if (places) {
      places.forEach(p => {
        const placeDisplayName = p.display;
        placesData[placeDisplayName] = null;
      });
    }
    const options = {
      data: placesData,
      onAutocomplete: place => {
        const selectedPlace = places.find(p => p.display === place);
        onAutocomplete(selectedPlace);
      }
    };

    return places ? (
      <Autocomplete
        id="placesAutocomplete"
        className={`${MAIN_COLOR_FONT} s3`}
        icon={<Icon>map</Icon>}
        options={options}
        placeholder="Location..."
      />
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};
export default connect(mapStateToProps, {})(PlacesAutocomplete);
