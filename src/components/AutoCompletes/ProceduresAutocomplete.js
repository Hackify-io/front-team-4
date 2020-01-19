import React, { Component } from "react";
import { Autocomplete, Icon } from "react-materialize";

//Import Utils
import { MAIN_COLOR_FONT } from "./../../utils/colors";

class ProceduresAutocomplete extends Component {
  render() {
    const { onAutocomplete } = this.props;
    console.log(this.state);
    return (
      <Autocomplete
        s={5}
        className={MAIN_COLOR_FONT}
        icon={<Icon>healing</Icon>}
        options={{
          data: {
            "Plastic Surgery": null,
            "Weight Loss": null,
            Chemotherapy: null,
            "Lymphatic Drainage": null
          },
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

export default ProceduresAutocomplete;
