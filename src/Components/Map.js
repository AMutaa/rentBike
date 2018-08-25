import React, { Component } from "react";

class Map extends Component {
  render() {

    this.renderMap()


    renderMap = () => {
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCiu8cL5KicirIURCmT0CaTDORhtqApNsQ&callback=initMap")
      window.initMap = this.initMap
    }

    initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });

      stat.map(myLocation => {

        var marker = new window.google.maps.Marker({
          position: { lat: myLocation.stations.latitude, lng: myLocation.stations.longitude, },
          map: map,
          title: "Hello World!"
        });
      })

    }


    { console.log(this.props) }
    const stat = this.props.stations
    console.log(stat)
    return (
      <main>
        <div id="map"></div>
        {console.log(this.props)}
      </main >

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


export default Map

