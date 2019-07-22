import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCities } from "./reducers/BikeActions";

class MainView extends Component {
  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  render() {
    const { usaCities } = this.props;
    console.log(usaCities);
    return (
      <div>
        <h3>CITY BIKES</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usaCities: state.cities.usaCities
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCities
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
