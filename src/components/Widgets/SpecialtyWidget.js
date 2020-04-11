import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import './SpecialtyWidget.css';
export default class SpecialtyCard extends Component {
  render() {
    const { specialty, img } = this.props;
    return (
      <Card>
        {/* Cambiar para que reciba la imagen */}
        <Image src={img} className="equalRatio" wrapped ui={false} />
        <Card.Content>
          <Card.Header textAlign="center">
            <Link to="#">{specialty}</Link>
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}
