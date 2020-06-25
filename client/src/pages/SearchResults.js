// TODO: Results displaying properly for now, by using URL
// in PROPS. Find a fix for this via Redux -> store search input,
// use search input in function to hit endpoint in the API

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Reactstrap
import { Button, Container } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getFilteredItems } from '../actions/itemActions';

export class SearchResults extends Component {
  static propTypes = {
    getFilteredItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { item_location } = this.props.match.params;
    this.props.getFilteredItems(item_location);
  }

  render() {
    const {
      filtered_results,
      match: {
        params: { item_location },
      },
    } = this.props;
    console.log(filtered_results);
    return (
      <Fragment>
        <h3>Trailers in {item_location}</h3>

        {filtered_results.map(
          ({ _id, brand, trailer_type, deck_dimensions, weight, price }) => (
            <div key={_id}>
              {brand}
              {trailer_type}
              {deck_dimensions}
              {weight}
              {price}
            </div>
          )
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  filtered_results: state.item.filtered_results,
});

export default connect(mapStateToProps, {
  getFilteredItems,
})(SearchResults);
