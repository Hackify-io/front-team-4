import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
// import "./doctorCard.css";
export default class DoctorWidget extends Component {
  render() {
    const { imgDoctor, doctorName, resume, experience, location } = this.props;

    return (
      <Card className="noBorder">
        <Card.Content>
          <Image src={imgDoctor} ui={true} circular />
          <Card.Header textAlign="center">
            <br />
            <a href="#">{doctorName}</a>
          </Card.Header>
          <Card.Meta textAlign="center">
            {resume}
            <br />
            {experience}
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
