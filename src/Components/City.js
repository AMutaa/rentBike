import React from "react";
import { Link } from "react-router-dom";


const City = ({ city }) => (

  <Link to={`/${city.id}`} className="city_name" >
    <h3>{city.location.city}</h3>
  </Link >
)


export default City;