import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlaces } from "./../../actions/placeActions";
import { Image } from "semantic-ui-react";
class PlaceWidget extends Component {
  async componentDidMount() {
    await this.props.getPlaces();
  }
  render() {
    console.log(this.props.places);
    return <Image>Hola</Image>;
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};
export default connect(mapStateToProps, { getPlaces })(PlaceWidget);
