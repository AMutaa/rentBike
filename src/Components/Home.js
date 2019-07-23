import React, { Component } from "react";

import styled from "styled-components";
import MainView from "./MainView";

class Home extends Component {
  state = {
    usaCities: []
  };

  render() {
    const { searchInput } = this.state;

    return (
      <div>
        <FilterBox
          placeholder="Enter your city"
          onChange={this.handleChange}
          value={searchInput}
        />
        <h2 className="select">Select your City</h2>
        <MainView />
      </div>
    );
  }
}

export default Home;

const FilterBox = styled.input`
  width: 300px;
  height: 50px;
  border: 2px solid #ffbe06;
  outline: none;
  border-radius: 4px;
  margin: 20px 0;
  font-size: 20px;
  padding-left: 5px;
`;

const NoResults = styled.h2`
  text-align: center;
  color: red;
`;
