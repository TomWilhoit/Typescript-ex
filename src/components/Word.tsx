import React, { Component } from "react";
import WordOfTheDay from "../interfaces/WordOfTheDay.interface";

export class Word extends Component<WordOfTheDay> {
  render() {
    const { wordOfTheDay } = this.props;
    return <h3>{wordOfTheDay}</h3>;
  }
}

export default Word;
