import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tabs from './components/tabs';
import Login from './components/login';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/' exact component={Login} />
          <Route path='/landing/:id' exact component={Landing} />
          <Route path='/tabs' exact component={Tabs} />
        </div>
      </Router>
    );
  }
}

export default App;
