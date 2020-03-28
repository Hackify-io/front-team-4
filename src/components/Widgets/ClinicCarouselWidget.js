import React from "react";
import { connect } from "react-redux";
import ClinicWidget from "./ClinicWidget";
import { getFeaturedClinics } from "./../../actions/clinicActions";
import OwlCarousel from "react-owl-carousel2";
import "./../common/models/owl.theme.default.css";
import "./../common/models/style.css";
class ClinicCarouselWidget extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      itemNo: 3,
      loop: true,

      rewind: true,
      center: true,
      autoplay: true,
      responsiveClass: "true",
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    };
  }

  async componentDidMount() {
    await this.props.getFeaturedClinics();
  }
  renderCards = () => {
    const { clinic } = this.props;

    return clinic.map((clinic, index) => (
      <div key={index} className="item">
        <ClinicWidget
          name={clinic.name}
          img={clinic.images[0]}
          description={clinic.description}
          rate={clinic.rates[0].value}
          //  serviceRate={clinic.serviceRate}
          numReviews={clinic.reviews.length}
          hoursWait={clinic.averageTime.hours}
          minutesWait={clinic.averageTime.minutes}
        />
      </div>
    ));
  };

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      center: this.state.center,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay,
      responsiveClass: this.state.responsiveClass,
      responsive: this.state.responsive
    };

    return (
      <div>
        <OwlCarousel ref="car" options={options}>
          {this.renderCards()}
        </OwlCarousel>
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
