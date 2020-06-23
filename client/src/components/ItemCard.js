import React, { Component } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Spinner,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const cardStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
};

class ItemCard extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {
      auth: { isAuthenticated },
      item: { items, loading },
    } = this.props;

    const trailer = items.map((t) => {
      return (
        <div key={t._id} style={{ margin: '5px' }}>
          <Card style={cardStyle}>
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

              {isAuthenticated ? (
                <Button
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
              ) : null}
            </CardBody>
          </Card>
        </div>
      );
    });

    const spinner = (
      <div style={{ marginLeft: '25vw', marginTop: '20vh' }}>
        <Spinner style={{ width: '3rem', height: '3rem' }} color='dark' />
      </div>
    );

    const trailerCards = <Row>{trailer}</Row>;

    return <div>{loading ? spinner : trailerCards}</div>;
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems })(ItemCard);
