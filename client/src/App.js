import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import LandingPage from './components/LandingPage';
import LandingUnder from './components/LandingUnder';
import ItemList from './components/ItemList';
import ItemModal from './components/ItemModal';

import { Container } from 'reactstrap';
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
    <div className="App">

      <AppNavBar />
      <LandingPage />
      <LandingUnder />
      <Container>
        <ItemModal />
      </Container>
      <ItemList />
      
    </div>
    </Provider>
  );
  }
}

export default App;
