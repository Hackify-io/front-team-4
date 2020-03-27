import React, { Component } from 'react'
import { Menu, Container } from "semantic-ui-react";
class SecondaryNav extends Component {
    state = { fixed: true, activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const {activeItem} = this.state;
        const { attached } = this.props;
        return (
            <Menu attached={attached} pointing secondary color="teal">
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
        )
    }
}


export default SecondaryNav;