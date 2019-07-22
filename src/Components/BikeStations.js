import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStations } from "./reducers/BikeActions";

export default class BikeStations extends Component {
  render() {
    return (
      <div>
        <h3>Bike Stations</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getStations
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeStations);
