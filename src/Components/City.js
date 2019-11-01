import React from "react";
import { Link } from "react-router-dom";

import { whileStatement } from "@babel/types";

const City = ({ city }) => (
  <Link
    to={`/${city.id}`}
    style={{
      textDecoration: "none",
      fontSize: "12px",
      borderRadius: "3px",
      backgroundColor: "#9F9D9D",
      width: "200px",
      color: "white",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0.2em 0"
    }}
  >
    <p data-test="city">{city.location.city}</p>
  </Link>
);

export default City;
