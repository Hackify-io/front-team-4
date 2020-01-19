//Import Modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Import Services
import { getProcedures } from "./../actions/procedureActions";
import { getPlaces } from "./../actions/placeActions";
//Import Components
import Section from "./common/Section";
import FeatureSlider from "./FeatureSlider";
import SearchFields from "./SearchFields";

//Import Utils
import { MAIN_COLOR_CLASS } from "./../utils/colors";
class Landing extends Component {
  componentDidMount() {
    this.props.getPlaces();
    this.props.getProcedures();
  }
  render() {
    return (
      <Fragment>
        <Section name="slider">
          <FeatureSlider />
        </Section>
        <Section name="search" className={MAIN_COLOR_CLASS}>
          <SearchFields />
        </Section>
      </Fragment>
    );
  }
}

export default connect(null, { getPlaces, getProcedures })(Landing);
