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
import { loadUser } from '../actions/authActions';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ListStyle = {
    
}

class ItemList extends Component {

    static propTypes = {
        loadUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getItems();
        this.props.loadUser();
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {

        const { items } = this.props.item;
        const { _id } = this.props.auth.user;
        const userID = _id;

        const addListings = (
            <p className='text-center'>Trailers to be hosted will be shown here.</p>
        );

        return(
            <div>
            <Container style={ListStyle} className='mb-5'>
                <ListGroup>
                    <TransitionGroup className='item-list'>
                        {items.map(({ _id, brand, trailer_type, deck_dimensions, weight, price, added_by, date }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                            { userID === added_by ?  
                                <Container>
                                    <Button
                                        className='remove-btn float-right'
                                        outline
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        // Getting ID to delete item from key={id} above
                                    >&times;
                                    </Button>
                                    <Container className='row'>
                                        <span className='col-4'><h6>Trailer Brand: </h6>{brand}</span>
                                        <span className='col-4'><h6>Trailer Type: </h6>{trailer_type}</span>
                                    </Container>

                                    <Container className='row mt-3'>
                                        <span className='col-4'><h6>Deck Dimensions: </h6>{deck_dimensions}</span>
                                        <span className='col-4'><h6>Maximum Weight Capacity: </h6>{weight}</span>
                                        <span className='col-4'><h6>Price (per Day): </h6>${price}.00</span>
                                    </Container>
                                    </Container>
                                : addListings }
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
    auth: state.auth,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem, loadUser })
    (ItemList);