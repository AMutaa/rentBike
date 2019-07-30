import React, { Component } from "react";
import Stations from "./Stations";
import Loading from "./Loading";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCityDetails } from "./reducers/BikeActions";
class CityDetail extends Component {
  componentDidMount() {
    const { getCityDetails } = this.props;
    getCityDetails(this.props.match.params.id);
    console.log(this.props);
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCiu8cL5KicirIURCmT0CaTDORhtqApNsQ&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    //Create a map

    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.latitude, lng: this.state.longitude },
      zoom: 15
    });
    //Create an InfoWindow
    var infowindow = new window.google.maps.InfoWindow();

    this.state.stations.forEach(station => {
      var contentString = `${station.name}`;
      //Create a Marker
      var marker = new window.google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },
        map: map,
        title: "Hello World"
      });

      //Click On A Marker
      marker.addListener("click", function() {
        //Change the content
        infowindow.setContent(contentString);
        //Open an InfoWindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    const { detail } = this.props;
    return (
      <div>
        {detail.loading ? (
          <Loading />
        ) : (
          <div className="city_detail">
            <div className="city_title">
              <h3>{detail.cityName}</h3>
              <h3>{detail.cityBike}</h3>
            </div>
            <div>
              <Stations stations={detail.stations} />
            </div>
            <div>
              <div id="map" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

const mapStateToProps = state => ({
  detail: state.cities
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCityDetails
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
