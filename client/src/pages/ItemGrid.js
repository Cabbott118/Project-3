import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import { CardDeck, Container } from 'reactstrap';

class ItemGrid extends Component {
  render() {
    return (
      <Container>
        <CardDeck>
          <ItemCard />
        </CardDeck>
      </Container>
    );
  }
}

export default ItemGrid;
