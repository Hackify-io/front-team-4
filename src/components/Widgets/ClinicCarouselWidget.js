import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import ClinicWidget from "./ClinicWidget";
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

class ClinicCarouselWidget extends React.Component {
  renderCards = () => {
    // const data = this.props;
    // return data.map(clinic => (
    //   <ClinicWidget
    //     name={clinic.clinicName}
    //     img={clinic.imgClinic}
    //     description={clinic.clinicDescription}
    //     rate={clinic.rating}
    //     serviceRate={clinic.serviceRate}
    //     numReviews={clinic.numReviews}
    //     timeOfWait={clinic.timeOfWait}
    //   />
    // ));
  };

  render() {
    console.log(this.props);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
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
    clinic: state.clinic,
    place: state.place,
    specialty: state.procedure
  };
};
export default connect(mapStateToProps, {})(ClinicCarouselWidget);
