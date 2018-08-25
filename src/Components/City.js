import React from "react";
import { Link } from "react-router-dom"


const City = ({ city }) => (

  < Link to={`/${city.id}`}>

    <h3>{city.location.city}</h3>
    <h4>{city.id}</h4>
  </Link >
)


export default City;