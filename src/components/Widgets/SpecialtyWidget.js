import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
export default class SpecialtyCard extends Component {
  render() {
    const { specialty, img } = this.props;
    return (
      <Card>
        {/* Cambiar para que reciba la imagen */}
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header textAlign="center">
            <a>{specialty}</a>
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}
