import React, { Component } from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
export default class EventsCard extends Component {
  render() {
    const { title, date, imgEvent, description } = this.props;
    return (
      <Card>
        <Image src={imgEvent} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <a href="#">{title}</a>
          </Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid divided="vertically">
            <Grid.Column floated="left" width={6}>
              <a href="#">See more</a>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <a href="#">
                <Icon name="facebook f" />
              </a>
              <a href="#">
                <Icon name="twitter" />
              </a>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
