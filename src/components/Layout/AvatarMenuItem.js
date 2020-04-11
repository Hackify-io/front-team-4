import React, { Component, Fragment } from 'react';
import { Image, Dropdown } from 'semantic-ui-react';
class AvatarMenuItem extends Component {
  render() {
    const { image, displayName } = this.props;
    return (
      <Fragment>
        {displayName}
        <Dropdown item trigger={<Image src={image} avatar />}>
          <Dropdown.Menu>{this.props.children}</Dropdown.Menu>
        </Dropdown>
      </Fragment>
    );
  }
}

export default AvatarMenuItem;
