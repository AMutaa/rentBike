import React, { Component } from "react";
import Stations from "./Stations"
class CityDetail extends Component {
  state = {
    cityName: '',
    cityBike: '',
    stations: [],
    longitude: '',
    latitude: '',
    name: ''
  }
  async componentDidMount() {

    const results = await fetch(`http://api.citybik.es/v2/networks/${this.props.match.params.id}`);
    const details = await results.json()
    console.log(details)
    const cityName = details.network.location.city
    const cityBike = details.network.name
    const stations = details.network.stations
    const longitude = details.network.location.longitude
    const latitude = details.network.location.latitude




    this.setState({
      details: details,
      cityName: cityName,
      cityBike: cityBike,
      stations: stations,
      longitude: longitude,
      latitude: latitude
    }, this.renderMap())


  } catch(e) {
    console.log(e);
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCiu8cL5KicirIURCmT0CaTDORhtqApNsQ&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.latitude, lng: this.state.longitude },
      zoom: 14
    });
    this.state.stations.map(station => {

      var marker = new window.google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },
        map: map,
        title: "Hello World"
      });
    }
    )
  }


  render() {

    const { cityName, cityBike, stations } = this.state
    return (
      <div className="city_detail">
        <div className="city_title">
          <h1>{cityName}</h1>
          <h3>{cityBike}</h3>
        </div>
        <div>
          <Stations stations={stations} />
        </div>
        <div>
          <div id="map"></div>
        </div >
      </div >
    )
  }

}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}




export default CityDetail;