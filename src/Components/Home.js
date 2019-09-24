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
    const filteredResults = usaCities.filter(item =>
      item.location.city.includes(searchInput)
    );

    return (
      <div>
        <FilterBox
          placeholder="Search your city"
          onChange={this.handleChange}
          value={searchInput}
        />

        <div className="cities">
          {filteredResults.map((city, index) => (
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
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  background: #dcf2f2;
  border-radius: 3px;
  margin: 50px 0;
  font-size: 12px;
  padding-left: 5px;
`;
