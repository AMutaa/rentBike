import React from "react";

const Station = ({ station }) => (

  <div>
    <h3>Station Name: {station.name}</h3>
    <p>Free Bikes:{station.free_bikes}</p>
    <p>Empty Slots:{station.empty_slots}</p>
    <p>{station.timestamp}</p>
  </div>)


export default Station;