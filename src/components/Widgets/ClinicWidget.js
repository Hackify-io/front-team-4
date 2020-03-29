import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Grid, Label } from "semantic-ui-react";
export default class ClinicWidget extends Component {
  render() {
    const {
      name,
      img,
      description,
      rate,
      //serviceRate,
      numReviews,
      hoursWait,
      minutesWait,
      className
    } = this.props;
    return (
      <Card className={className}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <Link to="#">{name}</Link>
          </Card.Header>
          <Card.Meta>{description}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Grid divided="vertically">
            <Grid.Column floated="left" width={6}>
              <Icon name="clock outline" />
              {hoursWait}:{minutesWait}
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Grid.Column floated="left">
                {/* <span className="color">{serviceRate}</span> */}
                <br />
                {numReviews}
              </Grid.Column>
              <Grid.Column floated="right">
                <Label color="blue">{rate}</Label>
              </Grid.Column>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
