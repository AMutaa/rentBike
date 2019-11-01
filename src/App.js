import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import styled from "styled-components";
import Home from "./Components/Home";
import CityDetail from "./Components/CityDetail";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <MainView>
        <Navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>
              rentBike
              <sup>USA</sup>
            </h1>
            <div />
            <h4>A fun and convenient way to get around</h4>
          </Link>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={CityDetail} />
        </Switch>
      </MainView>
    </Router>
  </Provider>
);

export default App;

const MainView = styled.div`
  padding: 50px;
  width: 70vw;
  margin: 0 auto;
`;

const Navbar = styled.div`
  h1,
  h4 {
    color: white;
  }

  sup {
    font-size: 12px;
    margin-left: 5px;
  }
`;
