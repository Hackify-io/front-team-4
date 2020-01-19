import React, { Component } from "react";
import { connect } from "react-redux";

import { Autocomplete, Icon } from "react-materialize";

//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";

class ProceduresAutocomplete extends Component {
  render() {
    const { onAutocomplete, procedures } = this.props;
    let procedureData = {};
    procedures.forEach(p => {
      procedureData[p.name] = null;
    });
    procedureData = {
      Surgery: null,
      Chemotaxis: null,
      "Strees Terapia": null,
      "Thooth Surgery": null
    };
    return (
      <Autocomplete
        s={5}
        className={MAIN_COLOR_FONT}
        icon={<Icon>healing</Icon>}
        options={{
          data: procedureData,
          onAutocomplete: procedure => {
            onAutocomplete(procedure);
          }
        }}
        placeholder="Find your treatment..."
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    procedures: state.procedure.procedures
  };
};
export default connect(mapStateToProps, {})(ProceduresAutocomplete);