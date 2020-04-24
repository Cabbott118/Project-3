import React, { Component } from 'react';
import { Container, Button, ButtonGroup, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import EditItem from './EditItem';

const ListStyle = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  marginBottom: '1.5rem',
  padding: '5px',
};

class ItemList extends Component {
  state = {
    id: this.props.id,
    brand: this.props.brand,
    trailer_type: this.props.trailer_type,
    deck_dimensions: this.props.deck_dimensions,
    weight: this.props.weight,
    price: this.props.price,
    date: Date.now,
  };

  static propTypes = {
    loadUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
    this.props.loadUser();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    const { _id } = this.props.auth.user;
    const userID = _id;

    return (
      <div>
        {items.map(
          ({
            _id,
            brand,
            trailer_type,
            deck_dimensions,
            weight,
            price,
            added_by,
            date,
          }) => (
            <div key={_id}>
              {userID === added_by ? (
                <div style={ListStyle}>
                  <Container>
                    <ButtonGroup className='float-right'>
                      <EditItem id={_id} />
                      <Button
                        color='danger'
                        size='sm'
                        onClick={this.onDeleteClick.bind(this, _id)}
                        // Getting ID to delete item from key={_id} above
                      >
                        <i className='fas fa-window-close'></i>
                      </Button>
                    </ButtonGroup>
                  </Container>
                  <Container>
                    <Row>
                      <Col style={{ color: '#888888' }}>
                        <b>{brand} </b>
                        <br />
                        <b>{trailer_type}</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <img
                          src='https://via.placeholder.com/250x150'
                          alt='Trailer Img'
                        />
                      </Col>
                      <Col>
                        <span>
                          <h6>Deck Dimensions: </h6>
                          {deck_dimensions}
                        </span>
                        <span>
                          <h6>Maximum Weight Capacity: </h6>
                          {weight}
                        </span>
                        <span>
                          <h6>Price (per Day): </h6>${price}.00
                        </span>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ) : null}
            </div>
          )
        )}
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
  deleteItem,
  loadUser,
})(ItemList);
