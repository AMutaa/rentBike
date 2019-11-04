import React from "react";
import moment from "moment";
import styled from "styled-components";

//MyFunctions

function freeBikechecker(num) {
  if (num === 0) {
    return `NO FREE BIKE`;
  } else if (num > 0 && num < 2) {
    return `FREE BIKE`;
  } else {
    return `FREE BIKES`;
  }
}

function emptySlotChecker(num) {
  if (num === 0) {
    return `NO EMPTY SLOT`;
  } else if (num > 0 && num < 2) {
    return `EMPTY SLOT`;
  } else {
    return `EMPTY SLOTS`;
  }
}

const Station = ({ station }) => (
  <StationCard>
    <Name id="station_name">
      <h3>{station.name}</h3>
    </Name>
    <Bikes>
      <div>
        <h4>{freeBikechecker(station.free_bikes)}</h4>
        <p>{station.free_bikes}</p>
      </div>
      <div>
        <div>
          <h4>{emptySlotChecker(station.empty_slots)}</h4>
          <p>{station.empty_slots}</p>
        </div>
      </div>
    </Bikes>
    <Timestamp>
      <p>{moment(station.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</p>
    </Timestamp>
  </StationCard>
);

export default Station;

const StationCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 120px;
  margin: 1em auto;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  background-color: #8c9cdb;
`;
const Name = styled.div`
  border-bottom: 2px solid white;
  h3 {
    margin: 0.5em 0;
  }
`;
const Bikes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  justify-content: space-evenly;
  div {
    text-align: center;
  }

  p {
    font-size: 1.5em;
  }
`;
const Timestamp = styled.div``;
