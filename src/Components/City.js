import React from "react";
import { Link } from "react-router-dom";


const City = ({ city }) => (
  <Link to={`/${city.id}`} className="city_name" style={{ textDecoration: "none" }} >
    <h3 data-test='city'>{city.location.city}</h3>
  </Link >
)


export default City;