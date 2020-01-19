//Import Modules
import React, { Component, Fragment } from "react";

//Import Components
import Section from "./common/Section";
import FeatureSlider from "./FeatureSlider";
import SearchFields from "./SearchFields";

//Import Utils
import { MAIN_COLOR_CLASS } from "./../utils/colors";
class Landing extends Component {
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

export default Landing;
