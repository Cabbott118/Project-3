import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ItemCard from './ItemCard';
import {
    CardDeck,
    Container,
    // Col,
    // Row
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
                {/* <Row> */}
                    {/* <Col> */}
                    <CardDeck>
                    <ItemCard />
                    </CardDeck>
                    {/* </Col> */}
                {/* </Row> */}
            </Container>
            </div>
        );
    };
};

export default ItemGrid;