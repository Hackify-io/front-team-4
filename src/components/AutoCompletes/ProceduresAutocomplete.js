import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'react-materialize';
import Autocomplete from './Autocomplete';
//Import Utils
import { MAIN_COLOR_FONT } from './../../utils/colors';

class ProceduresAutocomplete extends Component {
  render() {
    const { onAutocomplete, procedures, proceduresDefault, size } = this.props;
    const componentProcedure = proceduresDefault
      ? proceduresDefault
      : procedures;
    let procedureData = {};
    if (componentProcedure) {
      componentProcedure.forEach(p => {
        procedureData[p.name] = null;
      });
    }
    const options = {
      data: procedureData,
      onAutocomplete: procedure => {
        const selectedProcedure = componentProcedure.find(
          p => p.name === procedure
        );
        onAutocomplete(selectedProcedure);
      }
    };
    return componentProcedure ? (
      <Autocomplete
        id="proceduresAutocomplete"
        className={`${MAIN_COLOR_FONT} s${size}`}
        icon={<Icon>healing</Icon>}
        options={options}
        placeholder="Find your treatment..."
      />
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    procedures: state.procedure.procedures
  };
};
export default connect(mapStateToProps, {})(ProceduresAutocomplete);
