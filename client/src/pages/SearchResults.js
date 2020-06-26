import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Reactstrap

// Redux
import { connect } from 'react-redux';
import { getFilteredItems } from '../actions/itemActions';

export class SearchResults extends Component {
  static propTypes = {
    getFilteredItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    let search_param = JSON.parse(localStorage.getItem('search_location'));
    this.props.getFilteredItems(search_param);
  }

  render() {
    console.log(this.props);
    const { filtered_results } = this.props;

    const results = filtered_results.map((trailer) => {
      return (
        <div key={trailer._id}>
          <p>{trailer.brand}</p>
        </div>
      );
    });

    const noResults = <p>No results for you</p>;

    return (
      <Fragment>
        <h1>Results Here:</h1>
        {filtered_results.length > 0 ? results : noResults}
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
