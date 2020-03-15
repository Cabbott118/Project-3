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
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ListStyle = {
    
}

class ItemList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return(
            <div>
            <Button>
                
            </Button>
            <Container style={ListStyle} className='mb-5'>
                <ListGroup
                    className='border-top-0'
                >
                    <TransitionGroup className='item-list'>
                        {items.map(({ _id, brand, trailer_type, deck_dimensions, weight, price, addedBy, date }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    { this.props.isAuthenticated ? <Button
                                        className='remove-btn float-right'
                                        outline
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        // Getting ID to delete item from key={id} above
                                    >&times;
                                    </Button> : null }
                                    <Container className='row'>
                                        <span className='col-4'><h6>Trailer Brand: </h6>{brand}</span>
                                        <span className='col-4'><h6>Trailer Type: </h6>{trailer_type}</span>
                                    </Container>

                                    <Container className='row mt-3'>
                                        <span className='col-4'><h6>Deck Dimensions: </h6>{deck_dimensions}</span>
                                        <span className='col-4'><h6>Maximum Weight Capacity: </h6>{weight}</span>
                                        <span className='col-4'><h6>Price (per Day): </h6>${price}.00</span>
                                    </Container>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem })
    (ItemList);