import React, { Component } from 'react';
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
            <Container>
                <Row>
                    <Col>
                    <ItemCard />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ItemGrid;