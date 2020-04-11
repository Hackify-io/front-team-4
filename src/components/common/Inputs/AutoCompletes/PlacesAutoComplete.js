import React, { Component } from 'react';
import AutoComplete from './../../../core/AutoComplete';
import IconSearchResult from './IconSearchResult';
export default class PlacesAutoComplete extends Component {
  render() {
    const { places, onPlacesAutoComplete } = this.props;
    const displayField = 'display';
    const modelField = 'place';
    return (
      <AutoComplete
        data={places}
        onAutoComplete={onPlacesAutoComplete}
        field={displayField}
        model={modelField}
        resultRender={<IconSearchResult />}
      />
    );
  }
}
