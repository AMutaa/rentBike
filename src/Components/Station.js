import React from "react";


//MyFunctions

function freeBikechecker(num) {
  if (num === 0) {
    return `NO FREE BIKE`;
  }
  else if (num > 0 && num < 2) {
    return `FREE BIKE`;
  }
  else {
    return `FREE BIKES`;
  }
}

function emptySlotChecker(num) {
  if (num === 0) {
    return `NO EMPTY SLOT`;
  }
  else if (num > 0 && num < 2) {
    return `EMPTY SLOT`;
  }
  else {
    return `EMPTY SLOTS`;
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
