import React, { Component } from 'react';
import City from './City';
import styled from 'styled-components'


class Home extends Component {
  state = {
    searchInput: '',
    usaCities: []
  }



  handleChange = (e) => {
    const typedChar = e.target.value
    this.setState({
      searchInput: typedChar
    })
  }

  async componentDidMount() {
    try {
      const results = await fetch('https://api.citybik.es/v2/networks');
      const allBikes = await results.json()
      const usaCities = allBikes.networks.filter((item) => item.location.country === 'US')

      this.setState({
        usaCities: usaCities,

      })

    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { usaCities, searchInput } = this.state;
    const filteredResults = usaCities.map((item) => item.location.city)
    // console.log(filteredResults)
    const filteredResults2 = usaCities.filter((item) => item.location.city.toLowerCase() === searchInput)
    console.log(filteredResults2)
    // console.log(usaCities)
    return (
      <div>
        <FilterBox onChange={this.handleChange} value={searchInput} />
        <h2 className="select">Select your City</h2>
        <div className="cities">
          {usaCities.map((city, index) => <City key={index} city={city} />)}
        </div>
      </div >)

  }
}

export default Home;


const FilterBox = styled.input`
width: 300px;
height: 50px;
border: 2px solid #FFBE06;
outline:none;
border-radius: 4px;
margin: 20px 0;
font-size: 20px;
`