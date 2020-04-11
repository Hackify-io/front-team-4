import React, { Component } from 'react';
import { Icon } from 'react-materialize';

export default class Rate extends Component {
  renderCompleteStars = (number) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<Icon key={`complete-${i}`}>star</Icon>);
    }
    return stars;
  };
  renderIncompleteStars = (number) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<Icon key={`incomplete-${i}`}>star_half</Icon>);
    }
    return stars;
  };
  renderEmptyStars = (number) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<Icon key={`empty-${i}`}>star_border</Icon>);
    }
    return stars;
  };
  render() {
    const { rate } = this.props;
    const completeStars = Math.floor(rate);
    let incompleteStars = 0;
    let emptyStars = 0;
    if (rate < 5) {
      if (completeStars + 1 === 5 && completeStars !== rate) {
        incompleteStars = 1;
        emptyStars = 0;
      } else {
        incompleteStars = 1;
        emptyStars = 5 - completeStars - incompleteStars;
      }
    }

    return (
      <div className="valign-wrapper">
        Rate:
        {this.renderCompleteStars(completeStars)}
        {this.renderIncompleteStars(incompleteStars)}
        {this.renderEmptyStars(emptyStars)}
      </div>
    );
  }
}
