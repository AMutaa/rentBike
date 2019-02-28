import React, { Component } from 'react';
import City from './City';
import FilterBox from './FilterBox';


class Home extends Component {
  state = {
    usaCities: [],

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

    const { usaCities } = this.state;

    return (
      <div>
        <FilterBox />
        <h2 className="select">Select your City</h2>
        <div className="cities">
          {usaCities.map((city, index) => <City key={index} city={city} />)}
        </div>
      </div >)

  }
}

export default Home;