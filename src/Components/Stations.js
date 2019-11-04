import React from "react";
import Station from "./Station";
import styled from "styled-components";

const Stations = ({ stations }) => (
  <StationInfo>
    {stations.map((station, index) => (
      <Station key={index} station={station} />
    ))}
  </StationInfo>
);
export default Stations;

const StationInfo = styled.ul`
  overflow-y: scroll;
  padding: 0 1em 1em 0;
  max-height: 75vh;
  margin: 0;
  div {
    &:nth-child(1) {
      margin-top: 0;
    }
  }
`;

// .station_info {
//   padding: 10px 20px;
//   margin: 0;
//   width: 100%;
//   height: auto;
//   max-height: 75vh;
//   overflow: hidden;
//   overflow-y: scroll;
//   border: 1px solid gray;
// }
