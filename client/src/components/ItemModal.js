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
        name: '',
        brand: ''
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
        this.setState({ [e.target.brand]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            brand: this.state.brand
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
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Trailer</Button> : <h4 className='mb-3 ml-4'>Please log in to manage items!</h4> }

                

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Trailer Information</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Name</Label>
                                <Input 
                                    type='text'
                                    name='name'
                                    id='item'
                                    placeholder='Add Name...'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for='item'>Brand</Label>
                                <Input 
                                    type='text'
                                    name='brand'
                                    id='item'
                                    placeholder='Add Brand...'
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