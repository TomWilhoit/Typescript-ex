import React, { Component } from "react";
import WordOfTheDay from "../interfaces/WordOfTheDay.interface";

export class Word extends Component<WordOfTheDay> {
  render() {
    const { wordOfTheDay } = this.props;
    return (
      <div>
        <h2>{wordOfTheDay}</h2>
      </div>
    );
  }
}

export default Word;
