//Import Modules
import React, { Component } from "react";
import { Responsive, Icon, Button, Image } from "semantic-ui-react";
import SecondaryNav from "./SecondaryNav";
import PrimaryNav from "./PrimaryNav";
import ResponsiveNav from "./ResponsiveNav";
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
    return (
      <div>
        <Responsive
          getWidth={this.getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <PrimaryNav attached="top" />
          <SecondaryNav attached="bottom" />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
          <ResponsiveNav />
        </Responsive>
      </div>
    );
  }
}

export default LayoutNav;
