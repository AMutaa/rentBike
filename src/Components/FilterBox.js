import React, { Component } from 'react';
import styled from 'styled-components'

export default class FilterBox extends Component {
  state = {
    searchInput: ''
  }

  handleChange = (e) => {
    const typedChar = e.target.value
    this.setState({
      searchInput: e.target.value
    })
  }


  render() {
    const { searchInput } = this.state
    return (
      <FilterWrapper value={searchInput}>

      </FilterWrapper>
    )
  }
}

const FilterWrapper = styled.input`
width: 300px;
height: 50px;
border: 2px solid #FFBE06;
outline:none;
border-radius: 4px;
margin: 20px 0;
font-size: 20px;
`