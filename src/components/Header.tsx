import React, { Component } from 'react'
import Greeting from '../interfaces/Greeting.interface'

export class Header extends Component<Greeting> {
  render() {
    const {name, timeOfDay} = this.props;
    return (
      <h3>
        Good {timeOfDay}, {name}
      </h3>
    )
  }
}

export default Header
