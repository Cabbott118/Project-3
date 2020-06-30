import React, { Component, Fragment } from 'react';
// Components
import Search from '../components/Search';

// Reactstrap
import { Container } from 'reactstrap';
class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Rent-Net</h1>
        <Search />
      </Container>
    );
  }
}

export default Home;
