//Import Modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
//Import Services
import { getProcedures } from "./../actions/procedureActions";
import { getPlaces } from "./../actions/placeActions";
import { getClinics } from "./../actions/clinicActions";
//Import Components
import Section from "./common/Section";
//import FeatureSlider from './FeatureSlider';
import ClinicCarouselWidget from "././Widgets/ClinicCarouselWidget";
import ClinicList from "./ClinicList";
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
    const { filteredClinics } = this.props;
    return (
      <Fragment>
        <Section name="new-form">
          <SearchClinic />
        </Section>
        <Container name="slider">
          <ClinicCarouselWidget />
        </Container>
        <Section name="specialty-Widgets">
          <RenderSpecialtyWidget numberOfColumns={4} />
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
