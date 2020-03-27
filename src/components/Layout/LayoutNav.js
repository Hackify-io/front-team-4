//Import Modules
import React, { Component } from "react";
import { Menu, Segment, Responsive, Container } from "semantic-ui-react";
import SecondaryNav from './SecondaryNav';
import PrimaryNav from './PrimaryNav';
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
        <PrimaryNav attached="top"/>
        <SecondaryNav attached="bottom"/>
      </Responsive>
    );
  }
}

export default LayoutNav;
