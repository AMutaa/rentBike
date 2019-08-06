import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCities } from "./reducers/BikeActions";
import City from "./City";

class MainView extends Component {
  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  render() {
    console.log(this.props);
    const { usaCities } = this.props;
    console.log(usaCities);
    return (
      <div>
        <div className="cities">
          {usaCities.map((city, index) => (
            <City key={index} city={city} />
          ))}
        </div>
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
