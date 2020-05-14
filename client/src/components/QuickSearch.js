import React, { Component } from 'react';
import {
  Button,
  Container,
  Card,
  CardDeck,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const lookUpStyle = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  padding: '10px',
  backgroundColor: '#efefef',
  borderRadius: '5px',
  height: '100%',
  width: '100%',
  color: 'black',
};

const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
};

class QuickSearch extends Component {
  state = {
    rentCity: '',
    pickupDate: '',
    returnDate: '',
    searchedArray: [],
  };

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const searchCriteria = this.state.rentCity;
    const trailerArray = this.props.item.items;
    const results = trailerArray.filter(
      (item) => item.item_location === searchCriteria
    );

    this.setState({
      searchedArray: results,
    });
  };

  render() {
    const search = (
      <div>
        <h4 style={{ marginTop: '1rem', textAlign: 'center' }}>
          Search trailers based on location
        </h4>
        <Form
          onSubmit={this.onSubmit}
          style={{ marginTop: '2rem', marginBottom: '1rem' }}
        >
          <FormGroup>
            <Label for='rentCity'>Location:</Label>
            <Input
              type='text'
              name='rentCity'
              id='rentCity'
              placeholder='City'
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='pickupDate'>Pick Up On:</Label>
            <Input
              type='date'
              name='pickupDate'
              id='pickupDate'
              placeholder='date placeholder'
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='returnDate'>Return On:</Label>
            <Input
              type='date'
              name='returnDate'
              id='returnDate'
              placeholder='date placeholder'
              onChange={this.onChange}
            />
          </FormGroup>
          <Button block style={{ background: '#ff3b3f' }}>
            <i className='fas fa-search'></i> Search
          </Button>
        </Form>
      </div>
    );

    const { searchedArray } = this.state;

    const searchedResults = searchedArray.map((t) => {
      return (
        <div key={t._id} style={{ margin: '5px' }}>
          <Card className='justify-content-center' style={cardStyle}>
            <CardImg
              top
              width='100%'
              src='https://via.placeholder.com/250x150'
              alt='Trailer Img'
            />
            <CardBody>
              <CardTitle>
                <span className='text-left'>
                  <b>{t.brand}</b>
                </span>
              </CardTitle>
              <CardSubtitle>
                <span className='text-left'>
                  <b>{t.trailer_type}</b>
                </span>
              </CardSubtitle>
              <CardText>Deck Dimensions: {t.deck_dimensions}</CardText>
              <CardText>Total Weight Capacity: {t.weight}</CardText>
              <CardText>Price (per Day): ${t.price}.00</CardText>
              <CardText>Location: {t.item_location}</CardText>

              <Button
                id='rentButton'
                outline
                style={{
                  marginTop: '2rem',
                  color: 'white',
                  background: '#ff3b3f',
                }}
                block
              >
                Rent
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <Container style={lookUpStyle}>
          {search}
          {searchedArray.length === 0 ? null : (
            <CardDeck>{searchedResults}</CardDeck>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(QuickSearch);
