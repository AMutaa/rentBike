import React, { Component } from 'react';


class Home extends Component {
  state = {
    usaCities: [],

  }

  async componentDidMount() {
    try {
      const results = await fetch('http://api.citybik.es/v2/networks');
      const allBikes = await results.json()
      const usaCities = allBikes.networks.filter((item) => item.location.country === 'US')
      console.log(usaCities);




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
        {usaCities.map((item, index) => <li key={index}>{item.location.city}</li>)}

      </div>)
  }
}

export default Home;