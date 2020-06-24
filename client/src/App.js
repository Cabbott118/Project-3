import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Account from './pages/Account';
import ItemGrid from './pages/ItemGrid';
import SearchResults from './pages/SearchResults';

// Components
import AppNavBar from './components/AppNavBar';
import Logout from './components/auth/Logout';

// Redux
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
            <AppNavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/listings' component={ItemGrid} />
            <Route
              exact
              path='/listings/:item_location'
              component={SearchResults}
            />
            <Route exact path='/account' component={Account} />
            <Route exact path='/logout' component={Logout} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
