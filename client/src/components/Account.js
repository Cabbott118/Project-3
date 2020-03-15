import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
// import ItemList from './ItemList';
import {
    // Button,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const containerStyles = {
    marginTop: '2rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    width: '80vw',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
};

const accountStyles = {
    color: 'black'
};

class Account extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getItems();
    };

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const profile = (
            <div>
                <h3
                    style={accountStyles}
                    className='text-center'
                    >
                        Account Details
                </h3>
                <hr></hr>
                <h4
                    style={accountStyles}
                    >
                        
                        { user ? `Account Owner: ${user.first_name} ${user.last_name}` : '' }
                </h4>
                <h4
                    style={accountStyles}
                    >
                        
                        { user ? `Registered Email: ${user.email}` : '' }
                </h4>
            </div>
        );

        return(
            <div>
            <AppNavBar />
            <Container style={containerStyles}>
                { isAuthenticated ? profile : null }
            </Container> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(
    mapStateToProps,
    { getItems })
    (Account);