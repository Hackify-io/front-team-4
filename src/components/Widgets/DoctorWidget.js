import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./doctorcard.css";
// import "./doctorCard.css";
export default class DoctorWidget extends Component {
  render() {
    const { img, name, resume, experience, location } = this.props;

    return (
      <Card className="noBorder">
        <Card.Content textAlign="center">
          <Image src={img} ui={true} circular />
          <Card.Header textAlign="center">
            <br />
            <a href="#">{name}</a>
          </Card.Header>
          <Card.Meta textAlign="center">
            {resume}
            <br />
            {`${experience.years} Years ${experience.months} Months`}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="#">
            <Icon name="location arrow" />
            {location}
          </a>
        </Card.Content>
      </Card>
    );
  }
}
