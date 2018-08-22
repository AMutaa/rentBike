import React, { Component } from 'react';


class Home extends Component {
  state = {
    allBikes: [],
    name: ''
  }

  async componentDidMount() {
    try {



      const results = await fetch('http://api.citybik.es/v2/networks/hubway');

      const allBikes = await results.json();

      console.log(allBikes.network.name);
      // const usaBikes = allBikes.networks.filter((item) => item.location.country === 'US')
      // console.log(allBikes.network)
      // console.log(allBikes.network.name)
      // console.log(allBikes.network.stations)

      setTimeout(() => {
        this.setState({
          // allBikes: allBikes
          name: allBikes.network.name
        })
      }, 10000);



    } catch (e) {
      console.log(e)
    }
  }
  render() {



    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* {this.state.allBikes} */}
        {/* {this.state.allBikes.map((item) => <li key={item.id}>{item.location.city}</li>)} */}
      </div>
    )
  }
}

export default Home;