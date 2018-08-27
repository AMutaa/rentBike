import React, { Component } from "react";
import bicycle from "../bicycle.svg"

class Loading extends Component {
  render() {
    return (
      <div>
        <img src={bicycle} className="logo"></img>
        <h3>Loading City Information ...</h3>
      </div>
    )
  }
}

export default Loading;