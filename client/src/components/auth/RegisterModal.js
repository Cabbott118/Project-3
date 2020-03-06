import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error 
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    };

    toggle = () => {
        // Clear Errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.brand]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { first_name, last_name, email, password } = this.state;

        // Create User Object
        const newUser = {
            first_name,
            last_name,
            email,
            password
        };

        // Attempt to Register
        this.props.register(newUser);
        console.log(newUser);
    }

    render() {
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register Account</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? ( 
                        <Alert color='danger'>{ this.state.msg }</Alert> 
                        ) : null }
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

                                <Label for='last_name'>Last Name</Label>
                                <Input 
                                    type='text'
                                    name='last_name'
                                    id='last_name'
                                    placeholder='Smith'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='email'>Email</Label>
                                <Input 
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='example@example.com'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='password'>Password</Label>
                                <Input 
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Password'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Button
                                    outline
                                    color='dark'
                                    style={{marginTop: '2rem'}}
                                    block
                                >Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // Coming in from authReducer
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);