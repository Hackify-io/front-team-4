//Import Modules
import React, { Component } from "react";
import { Navbar, Icon } from "react-materialize";

//Import Components
import LoginNav from "./../Auth/LoginNav";

//Import Utils
import { MAIN_COLOR_CLASS } from "./../../utils/colors";
class LayoutNav extends Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        className={MAIN_COLOR_CLASS}
        brand={
          <a className="brand-logo" href="/">
            Medical Travel
          </a>
        }
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <LoginNav />
      </Navbar>
    );
  }
}

export default LayoutNav;
