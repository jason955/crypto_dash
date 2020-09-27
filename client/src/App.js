import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Admin from './components/main/admin';
import Login from './components/main/login';
import Landing from './components/main/landing';
import Todo from './components/main/redux-ex';
const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Route path='/' exact component={Login} />
            <Route path='/landing/:id' exact component={Landing} store={store} />
            <Route path='/admin' exact component={Admin} />
            <Route path='/todo' exact component={Todo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
