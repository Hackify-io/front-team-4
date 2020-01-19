//Import Modules
import React, { Component } from "react";
import { Caption, Slide, Slider, Button } from "react-materialize";

//Import Components

//Import Utils
import { MAIN_COLOR_FONT } from "../utils/colors";
class FeatureSlider extends Component {
  render() {
    return (
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: false,
          interval: 6000
        }}
      >
        <Slide
          image={<img alt="" src="http://lorempixel.com/780/580/nature/2" />}
        >
          <Caption placement="left">
            <h3>IMSS Funeraria</h3>
            <h5 className="light grey-text text-lighten-3">
              <Button className={MAIN_COLOR_FONT}>More...</Button>
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://lorempixel.com/780/580/nature/3" />}
        >
          <Caption placement="right">
            <h3>Cardio Mex</h3>
            <h5 className="light grey-text text-lighten-3">
              <Button className={MAIN_COLOR_FONT}>More...</Button>
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://lorempixel.com/580/250/nature/4" />}
        >
          <Caption placement="center">
            <h3>Medica del mar</h3>
            <h5 className="light grey-text text-lighten-3">
              <Button className={MAIN_COLOR_FONT}>More...</Button>
            </h5>
          </Caption>
        </Slide>
      </Slider>
    );
  }
}

export default FeatureSlider;
