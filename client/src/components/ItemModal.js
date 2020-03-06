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

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        brand: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

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
                <Button
                    outline
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Trailer</Button>

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
                                    onChange={this.onChange}
                                />
                                <Label for='item'>Brand</Label>
                                <Input 
                                    type='text'
                                    name='brand'
                                    id='item'
                                    placeholder='Add Brand...'
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
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);