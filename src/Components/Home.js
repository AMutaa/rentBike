import React, { Component } from 'react';


class Home extends Component {
  state = {
    allBikes: [],
  }

  async componentDidMount() {
    try {
      const results = await fetch('http://api.citybik.es/v2/networks');
      const allBikes = await results.json();
      const usaBikes = allBikes.networks.filter((item) => item.location.country === 'US')

      this.setState({
        allBikes: usaBikes
      })

    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <h1>BIKE LOCATIONS</h1>
      </div>
    )
  }
}

export default Home;