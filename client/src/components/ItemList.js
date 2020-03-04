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
import { 
    getItems,
    deleteItem
} from '../actions/itemActions';
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
                <ListGroup>
                    <TransitionGroup className="item-list">
                        {/* Map through and desctructure */}
                        {items.map(({ _id, brand }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn float-right"
                                        outline
                                        color="danger"
                                        size="sm"
                                        // Bind and pass in id to keep correct id for delete
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                        <h6 className="">Brand:</h6>
                                        {brand}
                                        {/* <br></br>
                                        <h6 className="mt-2">Type:</h6>
                                        {typetrailer} */}
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
    // When action (getItems) is brought in from REDUX, it is stored as a prop
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);