import React, { Component } from "react";
import Station from "./Station";
import Map from "./Map";
class CityDetail extends Component {
  state = {
    cityName: '',
    cityBikes: '',
    stations: []

  }
  async componentDidMount() {

    const results = await fetch(`http://api.citybik.es/v2/networks/${this.props.match.params.id}`);
    const details = await results.json()

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
      <div className="city_detail">
        <div >
          <h1>{cityName}</h1>
          <h3>{cityBikes}</h3>

          <ul className="station_info">
            {stations.map((station, index) =>
              <li key={index}><Station station={station} /></li>)}
          </ul>
        </div>

        {<Map stations={stations} />}
      </div >
    )
  }

}




export default CityDetail;