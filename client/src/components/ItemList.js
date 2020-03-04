import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

class ItemList extends Component {
    state = {
        items: [
            { 
                id: uuidv4(), 
                vin: '123456789tettffss', 
                brand: 'Example Brand 1', 
                type: 'Example Type 1', 
                dimensions: '24x8x4', 
                weight: '8000'
            },
            { 
                id: uuidv4(), 
                vin: '12345678988888888', 
                brand: 'Example Brand 2', 
                type: 'Example Type 1', 
                dimensions: '20x6x4', 
                weight: '6000'
            },
            { 
                id: uuidv4(), 
                vin: '12345678999999999', 
                brand: 'Example Brand 3', 
                type: 'Example Type 1', 
                dimensions: '32x10x4', 
                weight: '9500'
            },
            { 
                id: uuidv4(), 
                vin: '12345678911111111', 
                brand: 'Example Brand 4', 
                type: 'Example Type 1', 
                dimensions: '12x8x4', 
                weight: '4000'
            },
        ]
    }

    render() {
        const { items } = this.state;
        console.log(items)
        return(
            <Container>
                <Button
                    color='dark'
                    style={{marginBottom:'2rem'}}
                    onClick={() => {
                        const vin = prompt('Enter VIN');
                        if(vin) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuidv4(), vin }]
                            }));
                        }
                    }}
                >
                Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="item-list">
                        {items.map(({ id, brand }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn mr-2"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {brand}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ItemList;