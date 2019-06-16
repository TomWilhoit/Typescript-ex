import React, { Component } from "react";
import Greeting from "../interfaces/Greeting.interface";

export class Header extends Component<Greeting> {
  render() {
    const { name, timeOfDay } = this.props;
    return (
      <h2>
        Good {timeOfDay}, {name}
      </h2>
    );
  }
}

export default Header;
