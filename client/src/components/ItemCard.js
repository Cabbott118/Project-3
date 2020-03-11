import React, { Component } from 'react';
import {
    // Container,
    Button,
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import { 
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemCard extends Component {

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
                    <TransitionGroup className='item-list'>
                        {items.map(({ _id, brand, trailer_type, deck_dimensions, weight, price, date }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
   
                                    <Card style={{margin: '5px'}}>
                                        <CardBody>
                                        { this.props.isAuthenticated ? <Button
                                                className='remove-btn float-right'
                                                outline
                                                color='danger'
                                                size='sm'
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                // Getting ID to delete item from key={id} above
                                            >&times;
                                            </Button> : null }
                                            <CardTitle><span><h5>Brand: {brand}</h5></span></CardTitle>
                                            <CardSubtitle><span><h5>Trailer Type: {trailer_type}</h5></span></CardSubtitle>
                                            
                                        </CardBody>
                                        <img width='100%' src='https://via.placeholder.com/150' alt='Trailer Img' />
                                        <CardBody>
                                            <CardTitle className='text-center mb-3'><h5>Additional Information</h5></CardTitle>
                                            <CardText>Deck Dimensions: {deck_dimensions}</CardText>
                                            <CardText>Total Weight Capacity: {weight}</CardText>
                                            <CardText>Price per Day: {price}</CardText>
                                            <CardLink href='#'>Card Link</CardLink>
                                            <CardLink href='#'>Another Link</CardLink>
                                        </CardBody>
                                    </Card>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
    (ItemCard);