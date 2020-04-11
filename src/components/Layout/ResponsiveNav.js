import React, { Component } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";
class ResponsiveNav extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted secondary color="grey" fluid>
        <Container>
          <Menu.Menu position="left">
            <Dropdown item icon="bars">
              <Dropdown.Menu>
                <Dropdown.Item>Doctors</Dropdown.Item>
                <Dropdown.Item>Clinics</Dropdown.Item>
                <Dropdown.Item>Places</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Dropdown item text="EN">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
                <Dropdown.Item>Chinese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Container>
      </Menu>
    );
  }
}
export default ResponsiveNav;
