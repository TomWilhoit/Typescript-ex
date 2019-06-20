import React, { Component } from "react";
import Header from "./Header";
import Word from "./Word";
import WordDef from "./WordDef";
import { fetchData } from "../utils/fetchData";
import "../styles/App.css";

export class App extends Component<
  {},
  { wordOfTheDay: string; wordDef: string }
> {
  constructor(props: string) {
    super(props);
    this.state = {
      wordOfTheDay: "~Loading~",
      wordDef: "~Also Loading~"
    };
  }

  componentDidMount = () => {
    this.getWordFromApi();
  };

  getWordFromApi = async () => {
    const url = "https://node-practice-be.herokuapp.com/";
    console.log(url);
    const response = await fetchData(url);
    if (response.body.results === undefined) {
      this.setState({
        wordOfTheDay: response.body.word,
        wordDef: "No definition provided"
      });
    } else if (response.body.results) {
      this.setState({
        wordOfTheDay: response.body.word,
        wordDef: response.body.results[0].definition
      });
    }
    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Header name="Tom" timeOfDay="Morning" />
        <div>Your word or phrase of the day is:</div>
        <Word wordOfTheDay={this.state.wordOfTheDay} />
        <div>and it's definition is:</div>
        <WordDef wordDef={this.state.wordDef} />
        <div>Information provided by WordsApi.com</div>
      </div>
    );
  }
}

export default App;
