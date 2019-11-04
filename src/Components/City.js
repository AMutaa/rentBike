import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const City = ({ city }) => (
  <Link to={`/${city.id}`} style={{ textDecoration: "none" }}>
    <CityCard>{city.location.city}</CityCard>
  </Link>
);

export default City;

const CityCard = styled.div`
  width: 250px;
  background-color: #8c9cdb;
  border-radius: 3px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2em;
  fontsize: 12px;
  color: white;
  text-decoration: none;
  background-color: #8c9cdb;

  &:hover {
    background: #5f8aff;
  }
`;
