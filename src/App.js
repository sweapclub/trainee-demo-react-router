import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './home';
import About from './about';
import Team from './team';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/teams">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/teams" component={Team}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
