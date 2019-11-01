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
        <p>{freeBikechecker(station.free_bikes)}</p>
        <p>{station.free_bikes}</p>
      </div>
      <div>
        <div>
          <p>{emptySlotChecker(station.empty_slots)}</p>
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
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 120px;
  margin: 1em auto;
  border: 2px solid black;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div``;
const Bikes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Timestamp = styled.div``;
