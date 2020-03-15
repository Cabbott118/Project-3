import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ItemCard from './ItemCard';
import {
    Container,
    Col,
    Row
} from 'reactstrap';

class ItemGrid extends Component {

    static propTypes = {
        
    };

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
            <AppNavBar />
            <Container>
                <Row>
                    <Col>
                    <ItemCard />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default ItemGrid;