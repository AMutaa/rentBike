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

      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          CITY BIKES
          <sup>USA</sup>
        </h1>
        <h2>
          A fun and convenient way to get around
       </h2>

      </Link>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={CityDetail} />
      </Switch>
    </div >
  </Router>

)

export default App;



