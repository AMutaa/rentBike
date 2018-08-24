import React, { Component } from "react";

class CityDetail extends Component {
  state = {
    networkName: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.citybik.es/v2/networks/hubway')
      const cityDetail = await res.json();
      const cityStations = cityDetail.network.stations
      console.log(cityStations);

    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <h1>RES</h1>
    )
  }
}
export default CityDetail;