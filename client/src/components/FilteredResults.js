import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from './LoadingSpinner';

// Reactstrap
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getFilteredItems } from '../actions/itemActions';

export class FilteredResults extends Component {
  static propTypes = {
    getFilteredItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // Pull out the search params from props (passed in)
    const { search_location } = this.props;
    // Redux filter for location
    this.props.getFilteredItems(search_location);
  }
  // src='\uploads\image-1593461437399.png'

  render() {
    const {
      search_location,
      item: { filtered_results, loading },
    } = this.props;

    const results = filtered_results.map((trailer) => {
      return (
        <div className='trailer-container' key={trailer._id}>
          <Card inverse>
            <CardImg
              className='trailer-img'
              src='\uploads\trailer.jpg'
              alt='Card image cap'
            />
            <CardImgOverlay>
              <CardTitle>
                {trailer.trailer_type} Trailer in {trailer.item_location}
              </CardTitle>
              <CardText>{trailer.brand}</CardText>
              <CardText>
                {trailer.deck_dimensions} rated at {trailer.weight} lbs
              </CardText>
              <CardText>
                <b>${trailer.price} / day</b>
              </CardText>
            </CardImgOverlay>
          </Card>
          <Button
            block
            outline
            style={{
              color: 'white',
              background: '#ff3b3f',
            }}
          >
            Rent
          </Button>
        </div>

        /* <div>
            <img src='https://via.placeholder.com/250x150' alt='Trailer' />
          </div>

          <div>
            <h6>
              {trailer.brand} in {trailer.item_location}
            </h6>
            <h5>{trailer.trailer_type} Trailer</h5>
            <h6>
              {trailer.deck_dimensions} rated at {trailer.weight} lbs
            </h6>
            <b>${trailer.price} / day</b>
          </div> */
      );
    });

    const noResults = (
      <p>
        Sorry, looks like we don't have anything listed in {search_location}
      </p>
    );

    const loaded = (
      <Fragment>{filtered_results.length > 0 ? results : noResults}</Fragment>
    );

    return (
      <div style={{ position: 'relative' }}>
        {loading ? <Spinner top={'30vh'} left={'50%'} /> : loaded}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, {
  getFilteredItems,
})(FilteredResults);
