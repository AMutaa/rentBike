import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Home from './Components/Home';
import CityDetail from './Components/CityDetail';
import './App.css';

const App = () => (


  <Router>
    <div className="App">
      <h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          CITY BIKES <br />

        </Link>
      </h1>
      <h2>A fun a convenient way to get around</h2>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={CityDetail} />
      </Switch>
    </div >
  </Router>

)

export default App;



