import React from 'react';
import Home from './Components/Home'
import CityDetail from './Components/CityDetail'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={CityDetail} />
      </Switch>
    </Router>

  </div>
)

export default App;



