import React, { Component } from 'react';
import {
    Alert,
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

const termsConditionsDiv = {
    width: '100%',
    height: '200px',
    border: '1px solid #a9a9a9',
    borderRadius: '5px',
    overflow: 'auto',
    padding: '.5rem',
    marginBottom: '1rem'
}

class BecomeHostModal extends Component {
    state = {
        modal: false,
        id: this.props.auth.user._id,
        first_name: this.props.auth.user.first_name,
        last_name: this.props.auth.user.last_name,
        email: this.props.auth.user.email,
        user_location: '',
        user_phone: '',
        bank_account_number: '',
        bank_routing_number: '',
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
            user_location: this.state.user_location,
            user_phone: this.state.user_phone,
            bank_account_number: this.state.bank_account_number,
            bank_routing_number: this.state.bank_routing_number,
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
                            <Label for='user_location'>Location</Label>
                                <Input 
                                    type='text'
                                    name='user_location'
                                    id='user_location'
                                    placeholder='Tampa, FL'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            <Label for='user_phone'>Phone Number</Label>
                                <Input 
                                    type='text'
                                    name='user_phone'
                                    id='user_phone'
                                    placeholder='(xxx)-xxx-xxxx'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            <br />
                            <p style={{borderBottom: '1px solid #a9a9a9'}}>Banking Information</p>
                            <small className='text-muted'>Don't worry, we won't be sharing this with anyone.</small>
                            <br />
                            <small style={{color: 'red'}}>Don't actually input real info just yet.</small>
                            <br />
                            <br />
                            <Label for='bank_account_number'>Account Number</Label>
                                <Input 
                                    type='text'
                                    name='bank_account_number'
                                    id='bank_account_number'
                                    placeholder=''
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            <Label for='bank_routing_number'>Routing Number</Label>
                                <Input 
                                    type='text'
                                    name='bank_routing_number'
                                    id='bank_routing_number'
                                    placeholder=''
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            <p>Terms & Conditions</p>
                            <div style={termsConditionsDiv}>
                                <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. Integer a velit blandit, feugiat mi imperdiet, 
                                efficitur urna. Etiam quis arcu ut nibh rutrum ultricies et vitae mi. In hac 
                                habitasse platea dictumst. Aenean quis pellentesque orci. Cras sed vehicula ex, 
                                eget molestie neque. Suspendisse nunc augue, placerat sit amet est eu, mattis vulputate nisl. 
                                Morbi sit amet diam eu risus volutpat tempus. Aliquam ultrices augue non auctor ultrices. Vivamus 
                                sed tortor tincidunt arcu volutpat maximus. Maecenas laoreet sem 
                                at elit viverra feugiat. Nulla lorem sapien, ultrices sit amet metus non, 
                                accumsan luctus massa. Cras vehicula pulvinar dolor, sit amet interdum dolor commodo a. 
                                Nam luctus elit velit, non tincidunt ante lobortis vitae. 
                                Vestibulum vestibulum mattis elementum.
                                </p>
                            </div>
                            <Alert color="danger">
                                By clicking Submit, you agree to our Hosting Terms & Conditions.
                            </Alert>
                            <p>Note: Changes may require a refresh to take effect.</p>
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