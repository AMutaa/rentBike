import React from 'react';
import Home from './Components/Home'
import CityDetail from './Components/CityDetail'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import './App.css';

const App = () => (


  <Router>
    <div className="App">
      <h1>
        <Link to="/">
          BIKE****CATALOG
        </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={CityDetail} />
      </Switch>
    </div >
  </Router>

)

export default App;



