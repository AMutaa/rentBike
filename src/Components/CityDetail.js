import React, { Component } from "react";
import Stations from "./Stations";
import Loading from "./Loading";
class CityDetail extends Component {
  state = {
    cityName: '',
    cityBike: '',
    stations: [],
    longitude: '',
    latitude: '',
    name: '',
    loading: true
  }
  async componentDidMount() {

    const results = await fetch(`https://api.citybik.es/v2/networks/${this.props.match.params.id}`);
    const details = await results.json()
    console.log(details)
    const cityName = details.network.location.city
    const cityBike = details.network.name
    const stations = details.network.stations
    const longitude = details.network.location.longitude
    const latitude = details.network.location.latitude



    setTimeout(() => {
      this.setState({
        details: details,
        cityName: cityName,
        cityBike: cityBike,
        stations: stations,
        longitude: longitude,
        latitude: latitude,
        loading: false,
      }, this.renderMap())

    }, 1000)



  } catch(e) {
    console.log(e);
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCiu8cL5KicirIURCmT0CaTDORhtqApNsQ&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    //Create a map

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.latitude, lng: this.state.longitude },
      zoom: 15

    });
    //Create an InfoWindow
    var infowindow = new window.google.maps.InfoWindow()

    this.state.stations.forEach((station) => {
      var contentString = `${station.name}`
      //Create a Marker
      var marker = new window.google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },
        map: map,
        title: "Hello World"
      });

      //Click On A Marker
      marker.addListener('click', function () {

        //Change the content
        infowindow.setContent(contentString)
        //Open an InfoWindow
        infowindow.open(map, marker);

      })
    }
    )
  }


  render() {

    const { cityName, cityBike, stations, loading } = this.state
    return (
      <div>
        {
          loading ? (
            <Loading />
          ) : (
              <div className="city_detail">
                <div className="city_title">
                  <h3>{cityName}</h3>
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

      </div>
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