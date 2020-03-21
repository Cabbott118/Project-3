import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
    // Row,
    // Col
} from 'reactstrap';
import { 
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItems, editItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ListStyle = {
    
};

const modalStyle = {
    backgroundColor: '#efefef',
    color: '#a9a9a9'
}

class ItemList extends Component {

    state = {
        modal: false,
        id: this.id,
        brand: this.props.brand,
        trailer_type: this.props.trailer_type,
        deck_dimensions: this.props.deck_dimensions,
        weight: this.props.weight,
        price: this.props.price,
        date: Date.now
    };

    static propTypes = {
        loadUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        getItems: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getItems();
        this.props.loadUser();
    };

    toggle = (id) => {
        this.setState({
            modal: !this.state.modal,
            id
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { user } = this.props.auth;
        if (!user._id) return null;

        const editedItem = {
            id: this.state.id,
            brand: this.state.brand,
            trailer_type: this.state.trailer_type,
            deck_dimensions: this.state.deck_dimensions,
            weight: this.state.weight,
            price: this.state.price,
        };

        // Edit item via editItem action
        this.props.editItem(editedItem);
        this.toggle();
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
                                    <Container>
                                        <Button
                                            className='remove-btn'
                                            outline
                                            color='danger'
                                            size='sm'
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            // Getting ID to delete item from key={_id} above
                                            >&times;
                                        </Button>
                                        <Button
                                            outline
                                            style={{
                                                color: 'white',
                                                background: '#ff3b3f'
                                            }}
                                            className='mt-3 mb-3'
                                            onClick={this.toggle.bind(this, _id)}
                                        >Edit</Button>
                                        <Modal
                                            isOpen={this.state.modal}
                                            toggle={this.toggle}
                                            style={modalStyle}
                                        >
                                            <ModalHeader
                                                toggle={this.toggle}
                                                style={modalStyle}
                                            >
                                                Edit Information</ModalHeader>
                                            <ModalBody
                                                style={modalStyle}
                                            >
                                            <Form onSubmit={this.onSubmit}>
                                            <FormGroup>
                                
                                            <Label for='brand'>Brand</Label>
                                                <Input 
                                                    type='text'
                                                    name='brand'
                                                    id='brand'
                                                    placeholder='Ex: Big Tex Trailers...'
                                                    className='mb-3'
                                                    onChange={this.onChange}
                                                />

                                            <Label for='trailer_type'>Trailer Type</Label>
                                                <Input 
                                                    type='text'
                                                    name='trailer_type'
                                                    id='trailer_type'
                                                    placeholder='Ex: Dump, Enclosed, Livestock...'
                                                    className='mb-3'
                                                    onChange={this.onChange}
                                                />

                                            <Label for='deck_dimensions'>Deck Dimensions</Label>
                                                <Input 
                                                    type='text'
                                                    name='deck_dimensions'
                                                    id='deck_dimensions'
                                                    placeholder='LxW (ft)...'
                                                    className='mb-3'
                                                    onChange={this.onChange}
                                                />

                                            <Label for='weight'>Max Weight Capacity</Label>
                                                <Input 
                                                    type='text'
                                                    name='weight'
                                                    id='weight'
                                                    placeholder='in LBS...'
                                                    className='mb-3'
                                                    onChange={this.onChange}
                                                />

                                            <Label for='price'>Price/Day</Label>
                                                <Input 
                                                    type='text'
                                                    name='price'
                                                    id='price'
                                                    placeholder='$'
                                                    className='mb-3'
                                                    onChange={this.onChange}
                                                />

                                            <Button
                                                outline
                                                style={{
                                                marginTop: '2rem',
                                                color: 'white',
                                                background: '#ff3b3f'
                                            }}
                                                block
                                            >Submit Edits</Button>
                                            </FormGroup>
                                            </Form>
                                            </ModalBody>
                                        </Modal>
                                        
                                    </Container>
                                    <div className='row'>
                                        <span className='col-4'><h6>Trailer Brand: </h6>{brand}</span>
                                        <span className='col-4'><h6>Trailer Type: </h6>{trailer_type}</span>
                                    </div>

                                    <div className='row mt-3'>
                                        <span className='col-4'><h6>Deck Dimensions: </h6>{deck_dimensions}</span>
                                        <span className='col-4'><h6>Maximum Weight Capacity: </h6>{weight}</span>
                                        <span className='col-4'><h6>Price (per Day): </h6>${price}.00</span>
                                    </div>
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
    };
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, editItem, deleteItem, loadUser })
    (ItemList);