import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCities } from "./reducers/Actions";

class MainView extends Component {
  componentDidMount() {
    const { getCities } = this.props;
    console.log(this.props);
    getCities();
  }
  render() {
    return (
      <div>
        <h3>CITY BIKES</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usaCities: state.usaCities
});

export default connect(
  mapStateToProps,
  {
    getCities
  }
)(MainView);
