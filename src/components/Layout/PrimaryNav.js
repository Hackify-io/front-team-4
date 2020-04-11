import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import LogoHeaderMenuItem from './LogoHeaderMenuItem';
import AuthMenuItem from './AuthMenuItem';
class PrimaryNav extends Component {
  state = { fixed: true, activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    const { attached } = this.props;
    return (
      <Menu inverted secondary color="grey" attached={attached}>
        <Container>
          <Menu.Menu position="left">
            <Menu.Item
              name="logo"
              active={activeItem === 'logo'}
              onClick={this.handleItemClick}
            >
              <LogoHeaderMenuItem
                text="MedTravel"
                image="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-creador-de-avatar-masculino.jpg"
              />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item>
              <AuthMenuItem />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default PrimaryNav;
