import React, { Component } from "react";
import Header from "./Header";
import Word from "./Word";
import "../styles/App.css";
import WordOfTheDay from "../interfaces/WordOfTheDay.interface";


export class App extends Component< {}, {wordOfTheDay: string}> {
constructor(props:WordOfTheDay) {
  super(props)
  this.state = {
    wordOfTheDay: ''
  }
}

  render() {
    return (
      <div className="App">
        <Header name="Tom" timeOfDay="Morning" />
        <div>Your word of the day is:</div>
        <Word wordOfTheDay={this.state.wordOfTheDay} />
      </div>
    );
  }
}

export default App;
