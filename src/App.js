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
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>
            CITY BIKES
            <sup>USA</sup>
          </h1>
          <div />
          <h2>A fun and convenient way to get around</h2>
        </Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={CityDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
