import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ItemCard from './ItemCard';
import Background from '../images/backgroundThree.jpg';
import {
    CardDeck,
    Container,
} from 'reactstrap';

const pageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const encompassingStyle = {
    paddingTop: '2rem',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    minHeight: '100vh'
}

class ItemGrid extends Component {

    render() {
        return(
            <div style={pageStyle}>
                <AppNavBar />
                <div style={encompassingStyle}>
                    <Container>
                        <CardDeck>
                            <ItemCard />
                        </CardDeck>
                    </Container>
                </div>
            </div>
        );
    };
};

export default ItemGrid;