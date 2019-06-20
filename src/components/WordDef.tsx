import React, { Component } from "react";
import wordDef from "../interfaces/wordDef.interface";

export class WordDef extends Component<wordDef> {
  render() {
    const { wordDef } = this.props;
    return (
      <div>
        <h3>{wordDef}</h3>
      </div>
    );
  }
}

export default WordDef;
