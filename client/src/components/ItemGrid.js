import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ItemCard from './ItemCard';
import {
    CardDeck,
    Container,
} from 'reactstrap';

const gridStyle = {
    marginTop: '2rem'
}

class ItemGrid extends Component {

    render() {
        return(
            <div>
            <AppNavBar />
            <Container style={gridStyle}>
                <CardDeck>
                    <ItemCard />
                </CardDeck>
            </Container>
            </div>
        );
    };
};

export default ItemGrid;