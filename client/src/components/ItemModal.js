import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Reactstrap
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
} from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { clearErrors } from '../actions/errorActions';

const modalStyle = {
  backgroundColor: '#efefef',
  color: '#a9a9a9',
};

class ItemModal extends Component {
  state = {
    modal: false,
    img_file: null,
    brand: '',
    trailer_type: '',
    deck_dimensions: '',
    weight: '',
    price: '',
    added_by: '',
    added_by_fname: '',
    added_by_lname: '',
    item_location: '',
    msg: null,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for item addition error
      if (error.id === 'ADD_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  toggle = () => {
    // Clear Errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    if (!user._id) return null;

    // let { img_file } = this.state;
    // img_file = img_file.replace(/^.*\\/, '');
    // console.log(img_file);

    const newItem = {
      brand: this.state.brand,
      trailer_type: this.state.trailer_type,
      deck_dimensions: this.state.deck_dimensions,
      weight: this.state.weight,
      price: this.state.price,
      added_by: user._id,
      added_by_fname: user.first_name,
      added_by_lname: user.last_name,
      item_location: this.state.item_location,
    };

    // Add item via addItem action
    this.props.addItem(newItem);
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            outline
            style={{
              color: 'white',
              background: '#ff3b3f',
            }}
            className='mt-3 mb-3'
            onClick={this.toggle}
          >
            <i className='fas fa-plus-square'></i> Add Trailer
          </Button>
        ) : (
          <h4 className='text-left mt-3 mb-3'>
            To list a trailer, simply log in and register to become a host.
          </h4>
        )}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={modalStyle}
        >
          <ModalHeader toggle={this.toggle} style={modalStyle}>
            Trailer Information
          </ModalHeader>
          <ModalBody style={modalStyle}>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='img_file'>Trailer Image File</Label>
                <Input
                  type='file'
                  name='img_file'
                  id='img_file'
                  onChange={this.onChange}
                />
                <FormText color='muted' className='mb-3'>
                  Please provide a good quality photo to be featured with your
                  trailer listing.
                </FormText>
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
                <Label for='item_location'>Trailer Location</Label>
                <Input
                  type='text'
                  name='item_location'
                  id='item_location'
                  placeholder='Ex: Tampa'
                  className='mb-3'
                  onChange={this.onChange}
                />
                {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}
                <Button
                  outline
                  style={{
                    marginTop: '2rem',
                    color: 'white',
                    background: '#ff3b3f',
                  }}
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

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { addItem, clearErrors })(ItemModal);
