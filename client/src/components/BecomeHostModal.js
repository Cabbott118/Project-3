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
import { editUser } from '../actions/authActions'
import PropTypes from 'prop-types';


const modalStyle = {
    backgroundColor: '#efefef',
    color: '#a9a9a9'
};

class BecomeHostModal extends Component {
    state = {
        modal: false,
        id: this.props.auth.user._id,
        first_name: this.props.auth.user.first_name,
        last_name: this.props.auth.user.last_name,
        email: this.props.auth.user.email,
        is_host: this.props.auth.user.is_host,
        date: Date.now
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        editUser: PropTypes.func.isRequired
    };

    toggle = (user) => {
        this.setState({
            modal: !this.state.modal,
            user
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { user } = this.props.auth;

        if (!user._id) return null;

        const editedUser = {
            id: this.state.id,
            first_name: this.state.first_name,
            is_host: true
        };

        this.props.editUser(editedUser);
        this.toggle();

        console.log(editedUser);
    };

    render() {
        return(
            <div>
                <Button
                    outline
                    style={{
                        color: 'white',
                        background: '#ff3b3f'
                    }}
                    className='mt-3 mb-3'
                    onClick={this.toggle}>
                    <i className="fas fa-check-square"></i> Become a Host
                </Button>

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
                            <Label for='first_name'>First Name</Label>
                                <Input 
                                    type='text'
                                    name='first_name'
                                    id='first_name'
                                    placeholder='John'
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
    auth: state.auth,
    is_host: state.auth.is_host
});

export default connect(mapStateToProps, { editUser })(BecomeHostModal);