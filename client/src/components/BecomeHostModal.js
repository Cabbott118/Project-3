import React, { Component } from 'react';
import ItemModal from './ItemModal';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    // Label,
    // Input
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const modalStyle = {
    backgroundColor: '#efefef',
    color: '#a9a9a9'
};

class BecomeHostModal extends Component {
    state = {
        modal: false,
        is_host: ''
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        is_host: PropTypes.bool,
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { is_host } = this.state;

        this.setState({
            is_host: true
        });
        console.log(is_host);


        // Add item via addItem action
        this.toggle();
    };

    render() {
        return(
            <div>
                { this.props.isHost ? <ItemModal /> : 
                <Button
                    outline
                    style={{
                        color: 'white',
                        background: '#ff3b3f'
                    }}
                    className='mt-3 mb-3'
                    onClick={this.toggle}><i className="fas fa-check-square"></i> Become a Host</Button> }

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    style={modalStyle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                        style={modalStyle}
                    >
                        Host Information</ModalHeader>
                    <ModalBody
                        style={modalStyle}
                    >
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                
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
    auth: state.auth,
    is_host: state.auth.is_host
});

export default connect(mapStateToProps, {  })(BecomeHostModal);