import React from "react";

function freeBikechecker(num) {
  if (num === 0) {
    return `No Free Bike`;
  }
  else if (num > 0 && num < 2) {
    return `Free Bike`;
  }
  else {
    return `Free Bikes`;
  }
}

function emptySlotChecker(num) {
  if (num === 0) {
    return `No Empty Slot`;
  }
  else if (num > 0 && num < 2) {
    return `Empty Slot`;
  }
  else {
    return `Empty Slots`;
  }
}


const Station = ({ station }) => (


  <div>
    <h3>Station Name: {station.name}</h3>
    <p>{freeBikechecker(station.free_bikes)}:{station.free_bikes}</p>
    <p>{emptySlotChecker(station.empty_slots)}:{station.empty_slots}</p>
    <p>{station.timestamp}</p>
  </div>
)


export default Station;