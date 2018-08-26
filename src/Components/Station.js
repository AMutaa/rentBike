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


  <div className="station_detail">
    <div id="station_name"><h3>{station.name}</h3></div>
    <div><p><span>{station.free_bikes}</span><br />{freeBikechecker(station.free_bikes)}</p></div>
    <div><p><span>{station.empty_slots}</span><br /> {emptySlotChecker(station.empty_slots)}</p></div>
    <div id="station_timestamp"> <p>{station.timestamp}</p></div>

  </div>
)


export default Station;