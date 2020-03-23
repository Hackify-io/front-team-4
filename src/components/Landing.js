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
import SearchFields from "./SearchFields";
import ClinicList from "./ClinicList";
import SearchClinicForm from "./Landing/SearchClinicForm";

//import Widgets
import RenderSpecialtyWidget from "./Widgets/RenderSpecialtyWidget";

//Import Utils
import { MAIN_COLOR_CLASS } from "./../utils/colors";
class Landing extends Component {
  async componentDidMount() {
    await this.props.getPlaces();
    await this.props.getProcedures();
  }

  onSearchSubmit = async (procedure, place) => {
    await this.props.getClinics(procedure, place.place);
  };
  render() {
    const { filteredClinics } = this.props;
    return (
      <Fragment>
        <Section name="slider">{/* <FeatureSlider /> */}</Section>
        <Section name="search" className={MAIN_COLOR_CLASS}>
          <SearchFields onSearchClick={this.onSearchSubmit} />
        </Section>

        <Section name="clinic-Form">
          <SearchClinicForm />
        </Section>
        <Section name="specialty-Widgets">
          <RenderSpecialtyWidget numberOfColumns={4} />
        </Section>
        <Section name="clinic-List">
          <ClinicList clinics={filteredClinics} />
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
