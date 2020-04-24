import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './components/Account';
import Logout from './components/auth/Logout';
import Hero from './components/Hero';
import ItemGrid from './components/ItemGrid';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Route exact path='/' component={Hero} />
            <Route exact path='/listings' component={ItemGrid} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/logout' component={Logout} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
