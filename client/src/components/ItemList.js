import React, { Component } from 'react';
import {
    Container,
    Button,Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItems, editItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ListStyle = {
    width: '75%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    marginBottom: '1.5rem',
    padding: '5px'
};

const modalStyle = {
    backgroundColor: '#efefef',
    color: '#a9a9a9'
};

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
                {items.map(({ _id, brand, trailer_type, deck_dimensions, weight, price, added_by, date }) => (
                    <div key={_id} > 
                        { userID === added_by ?  
                            <div style={ListStyle}>
                                <Container>
                                    <ButtonGroup className='float-right'>
                                    <Button
                                        color='primary'
                                        size='sm'
                                        onClick={this.toggle.bind(this, _id)}
                                        ><i className="fas fa-edit"></i>
                                    </Button>
                                    <Button
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        // Getting ID to delete item from key={_id} above
                                        ><i className="fas fa-window-close"></i>
                                    </Button>
                                    </ButtonGroup>
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
                                <Container>
                                    <Row>
                                        <Col style={{color:'#888888'}}>
                                            <b>{brand} </b>
                                            <br />
                                            <b>{trailer_type}</b>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img src='https://via.placeholder.com/250x150' alt='Trailer Img' />
                                        </Col>
                                        <Col>
                                            <span><h6>Deck Dimensions: </h6>{deck_dimensions}</span>
                                            <span><h6>Maximum Weight Capacity: </h6>{weight}</span>
                                            <span><h6>Price (per Day): </h6>${price}.00</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        : addListings }
                    </div>
                ))}
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