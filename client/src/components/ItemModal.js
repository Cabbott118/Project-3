import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const modalStyle = {
    backgroundColor: '#efefef',
    color: '#a9a9a9'
};

class ItemModal extends Component {
    state = {
        modal: false,
        brand: '',
        trailer_type: '',
        deck_dimensions: '',
        weight: '',
        price: '',
        added_by: ''
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { user } = this.props.auth;
        console.log(user._id);

        if (!user._id) return null;

        const newItem = {
            brand: this.state.brand,
            trailer_type: this.state.trailer_type,
            deck_dimensions: this.state.deck_dimensions,
            weight: this.state.weight,
            price: this.state.price,
            added_by: user._id
        }

        // Add item via addItem action
        this.props.addItem(newItem);
        this.toggle();
        console.log(newItem);
    }

    render() {
        return(
            <div>
                { this.props.isAuthenticated ? <Button
                    outline
                    style={{
                        color: 'white',
                        background: '#ff3b3f'
                    }}
                    className='mt-3 mb-3'
                    onClick={this.toggle}
                >Add Trailer</Button> : <h4 className='text-left mt-3 mb-3'>To list a trailer, simply log in and register to become a host.</h4> }

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    style={modalStyle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                        style={modalStyle}
                    >
                        Trailer Information</ModalHeader>
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
                                >Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ItemModal);