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

class ItemList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup
                    // style={{border: 'black solid 1px'}}
                    className='border-top-0'
                >
                    <TransitionGroup className='item-list'>
                        {items.map(({ _id, name, brand }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn float-right'
                                        outline
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        // Getting ID to delete item from key={id} above
                                    >&times;
                                    </Button>
                                    {name}
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

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem })
    (ItemList);