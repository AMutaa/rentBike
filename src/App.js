import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";
import CityDetail from "./Components/CityDetail";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <div style={{ padding: "0 10px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>
              rentBike
              <sup>USA</sup>
            </h1>
            <div />
            <h4>A fun and convenient way to get around</h4>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={CityDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
