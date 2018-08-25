import React, { Component } from "react";
import Station from "./Station"
class CityDetail extends Component {
  state = {
    cityName: '',
    cityBikes: '',
    stations: []

  }
  async componentDidMount() {

    const results = await fetch(`http://api.citybik.es/v2/networks/${this.props.match.params.id}`);
    const details = await results.json()
    console.log(details)
    const cityName = details.network.location.city
    const cityBikes = details.network.name
    const stations = details.network.stations

    this.setState({
      cityName: cityName,
      cityBikes: cityBikes,
      stations: stations
    })


  } catch(e) {
    console.log(e);
  }
  render() {

    const { cityName, cityBikes, stations } = this.state
    return (
      <div>
        <h1>{cityName}</h1>
        <h3>{cityBikes}</h3>
        {stations.map((station, index) => <Station key={index} station={station} />)}
      </div>
    )
  }

}




export default CityDetail;