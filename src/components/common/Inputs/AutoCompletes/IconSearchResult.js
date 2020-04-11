import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
export default class IconSearchResult extends Component {
  render() {
    const { title, field } = this.props;
    const iconText = field ? this.props[field] : title;
    return (
      <Header as="h4">
        <Icon name="twitter" size="mini" />
        {iconText}
      </Header>
    );
  }
}
