import React, { Component, Fragment } from 'react';

// Components
import Search from '../components/Search';

// Reactstrap
// import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Rent-Net</h1>
        <Search />
      </Fragment>
    );
  }
}

export default Home;
