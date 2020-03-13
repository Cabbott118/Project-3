import React, { Component } from 'react';
import LandingUnder from './components/LandingUnder';
import ItemGrid from './components/ItemGrid';
import ItemModal from './components/ItemModal';
import Hero from './components/Hero';

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
        <Hero />

        <LandingUnder />

        <Container>
          <ItemModal />
        </Container>

        <ItemGrid />
      </div>

      </Provider>
    );
  }
}

export default App;
