import React from "react";
import Station from "./Station"

const Stations = ({ stations }) => (

  <div>
    <ul className="station_info">{stations.map((station, index) => <Station key={index} station={station} />)}</ul>
  </div>
)
export default Stations