//Import Modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
//Import Services
import { getProcedures } from './../actions/procedureActions';
import { getPlaces } from './../actions/placeActions';
import { getClinics } from './../actions/clinicActions';
//Import Components
import Section from './common/Section';
//import FeatureSlider from './FeatureSlider';
import ClinicCarouselWidget from '././Widgets/ClinicCarouselWidget';
//import Widgets
import RenderSpecialtyWidget from './Widgets/RenderSpecialtyWidget';
import RenderDoctorWidget from './Widgets/RenderDoctorWidget';
import RenderEventWidget from './Widgets/RenderEventWidget';
import SearchClinic from './Landing/SearchClinic';
import PlaceWidget from './Widgets/PlaceWidget';

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
        <Section name="doctor-Widgets">
          <RenderDoctorWidget numberOfColumns={4} />
        </Section>
        <Section name="specialty-Widgets">
          <RenderSpecialtyWidget numberOfColumns={4} />
        </Section>
        <Section name="places-widgets">{/* Aqui va las ciudades */}</Section>
        <Section name="event-Widgets">
          <RenderEventWidget numberOfColumns={4} />
        </Section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredClinics: state.clinic.filteredClinics,
  };
};
export default connect(mapStateToProps, {
  getPlaces,
  getProcedures,
  getClinics,
})(Landing);
