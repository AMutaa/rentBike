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
      <Link to="/">
        <div>
          <h1>BIKE****CATALOG</h1>
        </div>
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={CityDetail} />
      </Switch>
    </div >
  </Router>

)

export default App;



