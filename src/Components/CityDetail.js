import React, { Component, Fragment } from "react";
import Stations from "./Stations";
import Loading from "./Loading";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCityDetails } from "./reducers/BikeActions";
import styled from "styled-components";

class CityDetail extends Component {
  componentDidMount() {
    const { getCityDetails } = this.props;
    getCityDetails(this.props.match.params.id);
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
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: 15
    });
    //Create an InfoWindow
    var infowindow = new window.google.maps.InfoWindow();

    this.props.stations.forEach(station => {
      // var contentString = `${station.name}`;
      var contentString = "<div id='content'>Station Name</div>";
      //Create a Marker
      var marker = new window.google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },
        map: map,
        title: "Hello World"
        // animation: google.maps.Animation.DROP
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
    const { stations, cityName, loading } = this.props;
    this.renderMap();
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <CityTitle>{cityName}</CityTitle>
            <Detail>
              <div>
                <Stations stations={stations} />
              </div>
              <div>
                <div id="map" />
              </div>
            </Detail>
          </Fragment>
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
  cityName: state.cities.cityName,
  cityBike: state.cities.name,
  stations: state.cities.stations,
  longitude: state.cities.longitude,
  latitude: state.cities.latitude,
  loading: state.cities.loading
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

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const CityTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin: 1em 0;
`;
