import React, { Component } from 'react';

// Components
import FilteredResults from '../components/FilteredResults';
import MapContainer from '../components/maps/MapContainer';

// Reactstrap
import { Container, Row, Col } from 'reactstrap';

export class SearchResults extends Component {
  render() {
    // Store user's search input in a variable to be passed as props
    let search_location = JSON.parse(localStorage.getItem('search_location'));

    return (
      <Container>
        <Row xs='1' sm='1' md='2' style={{ marginTop: '3rem' }}>
          <Col>
            <FilteredResults search_location={search_location} />
          </Col>
          <Col>
            <div className='sticky-top'>
              <MapContainer />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
