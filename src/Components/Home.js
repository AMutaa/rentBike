import React, { Component } from 'react';


class Home extends Component {
  state = {
    allBikes: [],
  }

  async componentDidMount() {
    try {
      const results = await fetch('http://api.citybik.es/v2/networks');
      const allBikes = await results.json()
      const usaBikes = allBikes.networks.filter((item) => item.location.country === 'US');
      console.log(usaBikes);

      this.setState({
        allBikes: usaBikes
      })

    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.allBikes.map((item, index) =>
          <li key={index}>{item.location.city}</li>
        )}
      </div>
    )
  }
}

export default Home;