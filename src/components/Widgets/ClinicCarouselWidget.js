import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { getFeaturedClinics } from "./../../actions/clinicActions";
import ClinicWidget from "./ClinicWidget";
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
class ClinicCarouselWidget extends React.Component {
  async componentDidMount() {
    await this.props.getFeaturedClinics();
  }
  renderCards = () => {
    const { clinic } = this.props;
    let carouselClinics = [...clinic];
    const minSize = 5;
    console.log(clinic.length);
    if (clinic.length > 0) {
      for (let i = clinic.length; i <= minSize; i++) {
        carouselClinics.push(clinic[0]);
      }
    }
    return carouselClinics.map(clinic => (
      <ClinicWidget
        name={clinic.name}
        img={clinic.images[0]}
        description={clinic.description}
        //  rate={clinic.rating}
        //  serviceRate={clinic.serviceRate}
        //  numReviews={clinic.numReviews}
        hoursWait={clinic.averageTime.hours}
        minutesWait={clinic.averageTime.minutes}
      />
    ));
  };

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "360px",
      slidesToShow: 2,
      speed: 500,
      dots: true
    };

    return (
      <div>
        <Slider {...settings}>{this.renderCards()}</Slider>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    clinic: state.clinic.featuredClinics
  };
};
export default connect(mapStateToProps, { getFeaturedClinics })(
  ClinicCarouselWidget
);
