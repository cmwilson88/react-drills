import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Details from './components/Details/Details';
import Type from './components/Type/Type';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>POKEMON</h1>
        <Router>
          <div>
            <Route exact path="/" component={Search} />
            <Route path="/details/:id" component={Details} />
            <Route path="/type/:id" component={Type} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
