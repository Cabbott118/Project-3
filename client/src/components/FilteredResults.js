import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from './LoadingSpinner';

// Redux
import { connect } from 'react-redux';
import { getFilteredItems } from '../actions/itemActions';

const card = {
  width: '40%',
  padding: '10px',
};

const img = {
  width: '50%',
};

const info = {
  paddingTop: '3px',
};

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

  render() {
    const {
      search_location,
      item: { filtered_results, loading },
    } = this.props;

    const results = filtered_results.map((trailer) => {
      return (
        <div key={trailer._id} style={card}>
          <img
            src='https://via.placeholder.com/250x150'
            alt='Trailer'
            style={img}
          />
          <div style={info}>
            <h6>
              {trailer.brand} in {trailer.item_location}
            </h6>
            <h5>{trailer.trailer_type} Trailer</h5>
            <h6>
              {trailer.deck_dimensions} rated at {trailer.weight} lbs
            </h6>
            <b>${trailer.price} / day</b>
          </div>
          <hr />
        </div>
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
