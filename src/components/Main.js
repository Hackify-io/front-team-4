//Import Modules
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

//Import Components
import Navbar from "./Layout/LayoutNav";
import Footer from "./Layout/LayoutFooter";
import Landing from "./Landing";
import Clinic from "./Clinic/Clinic";

//Imprt Routes
import { MAIN_APP_URL, CLINICS_URL } from "./../routes";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path={MAIN_APP_URL} component={Landing} />
          <Route
            exact
            path={MAIN_APP_URL + CLINICS_URL + "/:clinicId"}
            component={Clinic}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
