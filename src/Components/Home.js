import React, { Component } from 'react';

function slotChecker(str) {
  if (str < 0) {
    return `${str} no empty slots`;
  } else if (str > 0 && str < 2) {
    return `${str} empty slot`;
  } else {
    return `${str} empty slots`;
  }
}


class Home extends Component {
  state = {
    allBikes: [],
    stations: [],
    title: ''
  }

  async componentDidMount() {
    try {
      const results = await fetch('http://api.citybik.es/v2/networks/hubway');
      const allBikes = await results.json()
      console.log(allBikes);
      const stations = allBikes.network.stations
      console.log(stations);
      const title = allBikes.network.name;
      console.log(title);



      this.setState({
        allBikes: allBikes,
        stations: stations,
        title: title
      })

    } catch (e) {
      console.log(e);
    }
  }
  render() {

    const { title, stations } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        {stations.map((item, index) => (<div key={index}>
          <h2>Station Name: {item.name}</h2>
          <h3>{slotChecker(item.empty_slots)}: {item.empty_slots}</h3>
          <h3>Free Bikes: {item.free_bikes}</h3>
        </div>))}
      </div>
    )
  }
}

export default Home;