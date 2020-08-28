import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodosList from './components/todo/todos-list';
import CreateTodo from './components/todo/create-todo';
import EditTodo from './components/todo/edit-todo';
import Tabs from './components/tabs';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/' exact component={Tabs} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
