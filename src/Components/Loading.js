import React, { Component } from "react";
import bicycle from "../bicycle.svg"

class Loading extends Component {
  render() {
    return (
      <div>
        <img src={bicycle}></img>

      </div>
    )
  }
}

export default Loading;