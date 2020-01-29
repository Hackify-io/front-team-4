//Import Modules
import React, { Component } from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

//Import Utils
import { MAIN_COLOR_CLASS } from './../../../utils/colors';

import {
  ADMIN_EDIT_CLINIC,
  ADMIN_APPOINTMENTS_CLINIC
} from './../../../routes';

export default class LayoutNav extends Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        fixed
        className={MAIN_COLOR_CLASS}
        brand={
          <a className="brand-logo" href="/">
            Medical Travel Admin
          </a>
        }
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href={ADMIN_EDIT_CLINIC}>Edit</NavItem>
        <NavItem href={ADMIN_APPOINTMENTS_CLINIC}>View Appointments</NavItem>
      </Navbar>
    );
  }
}
