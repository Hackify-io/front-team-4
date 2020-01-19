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
      procedureData[p] = null;
    });
    return (
      <Autocomplete
        s={5}
        className={MAIN_COLOR_FONT}
        icon={<Icon>healing</Icon>}
        options={{
          data: procedureData,
          onAutocomplete: procedure => {
            this.setValue(procedure);
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
