import React, { Component } from "react";

export default class ClinicShow extends Component {
  render() {
    const { description } = this.props;
    return (
      <div>
        <div>{description}</div>
        <div>images</div>
      </div>
    );
  }
}
