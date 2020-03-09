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

class ItemModal extends Component {
    state = {
        modal: false,

        brand: '',
        trailer_type: '',
        deck_dimensions: '',
        weight: '',
        price: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
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

        const newItem = {
            brand: this.state.brand,
            trailer_type: this.state.trailer_type,
            deck_dimensions: this.state.deck_dimensions,
            weight: this.state.weight,
            price: this.state.price
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
                    color='dark'
                    className='mt-3 mb-3'
                    onClick={this.toggle}
                >Add Trailer</Button> : <h4 className='text-center mt-3 mb-3 ml-4'>Please log in to manage items!</h4> }

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Trailer Information</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                
                                <Label for='brand'>Brand</Label>
                                <Input 
                                    type='text'
                                    name='brand'
                                    id='brand'
                                    placeholder='Ex: I dunno brands... lolz'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='trailer_type'>Trailer Type</Label>
                                <Input 
                                    type='text'
                                    name='trailer_type'
                                    id='trailer_type'
                                    placeholder='Ex: Enclosed...'
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
                                    color='dark'
                                    style={{marginTop: '2rem'}}
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
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ItemModal);