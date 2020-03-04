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
        // vin: '',
        brand: '',
        // typetrailer: '',
        // dimensions: '',
        // weight: ''
    };

    toggle = () => {
        // Set open/close state to opposite when modal button is toggled
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        // this.setState({ [e.target.vin]: e.target.value });
        this.setState({ [e.target.brand]: e.target.value });
        // this.setState({ [e.target.typetrailer]: e.target.value });
        // this.setState({ [e.target.dimensions]: e.target.value });
        // this.setState({ [e.target.weight]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            // vin: this.state.vin,
            brand: this.state.brand,
            // typetrailer: this.state.typetrailer,
            // dimensions: this.state.dimensions,
            // weight: this.state.weight
        }

        // Add item via addItem action, then close
        this.props.addItem(newItem);
        this.toggle();
        console.log(this.state.brand);
    }

    render() {
        return(
            <div>
                <Button
                    outline
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >Trailer Information
                    </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    {/* <Label for='vin'>Trailer VIN:</Label>
                                    <Input
                                        type='text'
                                        name='vin'
                                        id='vin'
                                        placeholder='Ex: 15XFE50331L000053'
                                        onChange={this.onChange}
                                        className="mb-3"
                                    /> */}
                                    <Label for='item'>Trailer Brand:</Label>
                                    <Input
                                        type='text'
                                        name='brand'
                                        id='item'
                                        placeholder='Trailer Brand'
                                        onChange={this.onChange}
                                        className="mb-3"
                                    />
                                    {/* <Label for='typetrailer'>Trailer Type:</Label>
                                    <Input
                                        type='text'
                                        name='typetrailer'
                                        id='typetrailer'
                                        placeholder='Exs: Dump/Car Hauler/Livestock'
                                        onChange={this.onChange}
                                        className="mb-3"
                                    />
                                    <Label for='dimensions'>Trailer Dimensions:</Label>
                                    <Input
                                        type='text'
                                        name='dimensions'
                                        id='dimensions'
                                        placeholder='Ex: LxWxH'
                                        onChange={this.onChange}
                                        className="mb-3"
                                    />
                                    <Label for='weight'>Max Weight Capacity:</Label>
                                    <Input
                                        type='text'
                                        name='weight'
                                        id='weight'
                                        placeholder='LBS'
                                        onChange={this.onChange}
                                        className="mb-3"
                                    /> */}
                                    <Button
                                        outline
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                    >
                                        Submit
                                    </Button>
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

export default connect(mapStateToProps, { addItem })(ItemModal);