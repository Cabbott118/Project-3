// TODO: Find permanent fix for searching items and displaying
// on SearchResults page!

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Reactstrap
import { Form, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getFilteredItems } from '../actions/itemActions';

export class Search extends Component {
  state = {
    location: '',
    trailer_type: '',
    pu_date: '',
    re_date: '',
  };

  static propTypes = {
    getFilteredItems: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { location } = this.state;
    localStorage.setItem('search_location', JSON.stringify(location));
    window.location.href = `/listings/${location}`;
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <InputGroup>
            <Input
              placeholder='Location'
              name='location'
              id='location'
              onChange={this.onChange}
            />
            <Input
              placeholder='Trailer Type'
              name='trailer_type'
              id='trailer_type'
              onChange={this.onChange}
            />
            <Input
              placeholder='Pick Up Date'
              type='date'
              id='pu_date'
              name='pu_date'
              onChange={this.onChange}
            />
            <Input
              placeholder='Return Date'
              type='date'
              id='re_date'
              name='re_date'
              onChange={this.onChange}
            />
            <InputGroupAddon addonType='append'>
              <Button
                outline
                style={{
                  color: 'white',
                  background: '#ff3b3f',
                }}
              >
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  filtered_results: state.item.filtered_results,
});

export default connect(mapStateToProps, {
  getFilteredItems,
})(Search);
