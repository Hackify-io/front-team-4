import React, { Component } from "react";
import AutoComplete from "./../../../core/AutoComplete";
import IconSearchResult from "./IconSearchResult";
export default class SpecialtyAutoComplete extends Component {
  render() {
    const { specialties, onSpecialtyAutoComplete } = this.props;
    const displayField = "display";
    const modelField = "specialty";
    return (
      <AutoComplete
        data={specialties}
        onAutoComplete={onSpecialtyAutoComplete}
        field={displayField}
        model={modelField}
        resultRender={<IconSearchResult />}
      />
    );
  }
}
