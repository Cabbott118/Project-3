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
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItems, editItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const modalStyle = {
  backgroundColor: '#efefef',
  color: '#a9a9a9',
};

class EditItem extends Component {
  state = {
    modal: false,
    id: null,
    brand: null,
    trailer_type: null,
    deck_dimensions: null,
    weight: null,
    price: null,
  };

  static propTypes = {
    loadUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    getItems: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });

    const {
      id,
      item: { items },
    } = this.props;

    for (let i = 0; i < items.length; i++) {
      const trailer = items[i];
      if (trailer._id === id) {
        this.setState({
          id: trailer._id,
          brand: trailer.brand,
          trailer_type: trailer.trailer_type,
          deck_dimensions: trailer.deck_dimensions,
          weight: trailer.weight,
          price: trailer.price,
        });
        console.log(this.state);
      }
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      user: { _id },
    } = this.props.auth;

    const {
      id,
      brand,
      trailer_type,
      deck_dimensions,
      weight,
      price,
    } = this.state;

    if (!_id) return null;

    const editedItem = {
      id: id,
      brand: brand,
      trailer_type: trailer_type,
      deck_dimensions: deck_dimensions,
      weight: weight,
      price: price,
    };

    // Edit item via editItem action
    this.props.editItem(editedItem);
    this.toggle();
  };

  render() {
    const { brand, trailer_type, deck_dimensions, weight, price } = this.state;
    return (
      <div>
        <Button color='primary' size='sm' onClick={this.toggle}>
          <i className='fas fa-edit'></i>
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={modalStyle}
        >
          <ModalHeader toggle={this.toggle} style={modalStyle}>
            Edit Information
          </ModalHeader>
          <ModalBody style={modalStyle}>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='brand'>Brand</Label>
                <Input
                  type='text'
                  name='brand'
                  id='brand'
                  placeholder={brand}
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='trailer_type'>Trailer Type</Label>
                <Input
                  type='text'
                  name='trailer_type'
                  id='trailer_type'
                  placeholder={trailer_type}
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='deck_dimensions'>Deck Dimensions</Label>
                <Input
                  type='text'
                  name='deck_dimensions'
                  id='deck_dimensions'
                  placeholder={deck_dimensions}
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='weight'>Max Weight Capacity</Label>
                <Input
                  type='text'
                  name='weight'
                  id='weight'
                  placeholder={weight}
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='price'>Price/Day</Label>
                <Input
                  type='text'
                  name='price'
                  id='price'
                  placeholder={price}
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Button
                  outline
                  style={{
                    marginTop: '2rem',
                    color: 'white',
                    background: '#ff3b3f',
                  }}
                  block
                >
                  Submit Edits
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
  auth: state.auth,
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getItems,
  editItem,
  loadUser,
})(EditItem);
