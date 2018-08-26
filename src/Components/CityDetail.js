import React, { Component } from "react";
import Stations from "./Stations"
class CityDetail extends Component {
  state = {
    cityName: '',
    cityBike: '',
    stations: []


  }
  async componentDidMount() {

    const results = await fetch(`http://api.citybik.es/v2/networks/${this.props.match.params.id}`);
    const details = await results.json()
    const cityName = details.network.location.city
    const cityBike = details.network.name
    const stations = details.network.stations
    console.log(stations);
    this.renderMap()


    this.setState({
      details: details,
      cityName: cityName,
      cityBike: cityBike,
      stations: stations
    })


  } catch(e) {
    console.log(e);
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCiu8cL5KicirIURCmT0CaTDORhtqApNsQ&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }


  render() {

    const { cityName, cityBike, stations } = this.state
    return (
      <div>
        <h1>{cityName}</h1>
        <h3>{cityBike}</h3>
        <div className="fresh">
          <Stations stations={stations} />
          <main>
            <div id="map"></div>
          </main >

        </div>

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