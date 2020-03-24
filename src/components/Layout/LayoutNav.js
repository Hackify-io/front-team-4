//Import Modules
import React, { Component } from "react";
import { Menu, Segment, Responsive, Container } from "semantic-ui-react";

class LayoutNav extends Component {
  state = { fixed: true, activeItem: "home" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };
  render() {
    const { fixed, activeItem } = this.state;
    return (
      <Responsive
        getWidth={this.getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Segment textAlign="center">
          <Menu fixed={fixed ? "top" : null}></Menu>
          <Menu fixed={fixed ? "top" : null} pointing secondary>
            <Container>
              <Menu.Item
                as="a"
                active={activeItem === "home"}
                name="home"
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>
              <Menu.Item
                name="doctor"
                active={activeItem === "doctor"}
                as="a"
                onClick={this.handleItemClick}
              >
                Doctor
              </Menu.Item>
              <Menu.Item
                as="a"
                name="category"
                active={activeItem === "category"}
                onClick={this.handleItemClick}
              >
                Category
              </Menu.Item>
              <Menu.Item
                as="a"
                name="dashboard"
                active={activeItem === "dashboard"}
                onClick={this.handleItemClick}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                as="a"
                name="clinic"
                active={activeItem === "clinic"}
                onClick={this.handleItemClick}
              >
                Clinic
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Responsive>
    );
  }
}

export default LayoutNav;
