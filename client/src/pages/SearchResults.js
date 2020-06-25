import React, { Component } from 'react';
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
    this.props.getFilteredItems();
  }

  onClick = () => {
    console.log(this.props);
  };

  render() {
    console.log(this.props.filtered_results);
    return (
      <Container>
        <h1>Searched Results</h1>
        <Button onClick={this.onClick}>Log</Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  filtered_results: state.item.filtered_results,
});

export default connect(mapStateToProps, {
  getFilteredItems,
})(SearchResults);
