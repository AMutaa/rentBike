import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCities } from "./reducers/BikeActions";
import City from "./City";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usaCities: [],
      searchInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }
  handleChange(e) {
    const typedChar = e.target.value;
    this.setState({
      searchInput: typedChar
    });
  }
  render() {
    const { searchInput } = this.state;
    const { usaCities } = this.props;
    const filterdResults = usaCities.filter(
      item => item.location.city.toLowerCase() === searchInput
    );
    console.log(filterdResults);
    return (
      <div>
        <FilterBox
          placeholder="Enter your city"
          onChange={this.handleChange}
          value={searchInput}
        />
        <h2 className="select">Select your City</h2>

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
)(Home);

const FilterBox = styled.input`
  width: 300px;
  height: 50px;
  border: 2px solid #ffbe06;
  outline: none;
  border-radius: 4px;
  margin: 20px 0;
  font-size: 20px;
  padding-left: 5px;
`;
