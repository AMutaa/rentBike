import React from "react";

const Station = ({ station }) => (

  <div>
    <h3>{station.name}</h3>
    <p>{station.free_bikes}</p>
    <p>{station.empty_slots}</p>
    <p>{station.timestamp}</p>
  </div>)


export default Station;