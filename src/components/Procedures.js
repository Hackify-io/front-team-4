import React, { Component } from "react";
import { connect } from "react-redux";
class Procedures extends Component {
  render() {
    return <div></div>;
  }
}

mapStateToProps = state => {
  return {
    procedures: state.procedure.procedures
  };
};
export default connect(mapStateToProps, {})(Procedures);
