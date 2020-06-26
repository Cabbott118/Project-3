import React, { Component, Fragment } from 'react';

// Components
import FilteredResults from '../components/FilteredResults';

// Reactstrap

export class SearchResults extends Component {
  render() {
    // Store user's search input in a variable to be passed as props
    let search_location = JSON.parse(localStorage.getItem('search_location'));

    return (
      <Fragment>
        <FilteredResults search_location={search_location} />
      </Fragment>
    );
  }
}

export default SearchResults;
