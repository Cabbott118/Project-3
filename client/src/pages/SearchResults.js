import React, { Component } from 'react';

// Components
import FilteredResults from '../components/FilteredResults';
import MapContainer from '../components/maps/MapContainer';

// Reactstrap
import { Row, Col } from 'reactstrap';

export class SearchResults extends Component {
  render() {
    // Store user's search input in a variable to be passed as props
    let search_location = JSON.parse(localStorage.getItem('search_location'));

    return (
      <Row>
        <Col>
          <FilteredResults search_location={search_location} />
        </Col>
        <Col>
          <MapContainer />
        </Col>
      </Row>
    );
  }
}

export default SearchResults;
