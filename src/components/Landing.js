//Import Modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//Import Services
import { getProcedures } from "./../actions/procedureActions";
import { getPlaces } from "./../actions/placeActions";
import { getClinics } from "./../actions/clinicActions";
//Import Components
import Section from "./common/Section";
//import FeatureSlider from './FeatureSlider';
import ClinicCarouselWidget from "././Widgets/ClinicCarouselWidget";
//import Widgets
import RenderSpecialtyWidget from "./Widgets/RenderSpecialtyWidget";
import SearchClinic from "./Landing/SearchClinic";

//Import Utils
class Landing extends Component {
  async componentDidMount() {
    await this.props.getPlaces();
    await this.props.getProcedures();
  }

  onSearchSubmit = async (procedure, place) => {
    await this.props.getClinics(procedure, place.place);
  };
  render() {
    return (
      <Fragment>
        <Section name="new-form">
          <SearchClinic />
        </Section>
        <Section name="clinic-carousel">
          <ClinicCarouselWidget />
        </Section>
        <Section name="specialty-Widgets">
          <RenderSpecialtyWidget numberOfColumns={4} />
        </Section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredClinics: state.clinic.filteredClinics
  };
};
export default connect(mapStateToProps, {
  getPlaces,
  getProcedures,
  getClinics
})(Landing);
