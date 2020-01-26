import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'react-materialize';
import Autocomplete from './Autocomplete';
//Import Utils
import { MAIN_COLOR_FONT } from './../../utils/colors';

class ProceduresAutocomplete extends Component {
  render() {
    const { onAutocomplete, procedures } = this.props;
    let procedureData = {};
    if (procedures) {
      procedures.forEach(p => {
        procedureData[p.name] = null;
      });
    }
    const options = {
      data: procedureData,
      onAutocomplete: procedure => {
        const selectedProcedure = procedures.find(p => p.name === procedure);
        onAutocomplete(selectedProcedure);
      }
    };
    return procedures ? (
      <Autocomplete
        id="proceduresAutocomplete"
        className={`${MAIN_COLOR_FONT} s5`}
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
