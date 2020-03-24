import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import BecomeHostModal from './BecomeHostModal'
import ItemList from './ItemList';
import {
    Container,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import PropTypes from 'prop-types';
import ItemModal from './ItemModal';

const accStyle = {
    minHeight: '100vh',
};

const detailsStyle = {
    marginTop: '1rem'
};

class Account extends Component {
    state = {
        user: this.props.auth.user
    };

    static propTypes = {
        loadUser: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadUser();
    };
  
    render() { 
        const user = this.props.auth.user
        if (!user) {
            return null;
        };

        const userListings = (
            <Container className='listingDetails'>
                <h4 style={{
                    borderBottom: '2px solid #888888',
                    paddingBottom: '1rem'
                }} className='text-center mb-2'>
                    Current Listings for: {user.email}
                </h4>
                { this.props.auth.user.is_host ? <ItemList /> : null }
            </Container>
        );

        return (
            <div style={accStyle}>
                <AppNavBar />
                <Container>
                <Row className='accountRow justify-content-center'>
                <Container className='accountDetails'>
                    <h4 style={{
                        borderBottom: '2px solid #888888',
                        paddingBottom: '1rem'
                    }} className='text-center mb-2'>
                        Account Details
                    </h4>
                    { user.is_admin ? <p>Administrator Account</p> : null }
                    <h4 style={detailsStyle}>Account Owner:</h4>
                    <h5>{user.first_name} {user.last_name}</h5>
                    <h4 style={detailsStyle}>Registered Email:</h4>
                    <h5>{user.email}</h5>
                    { this.props.auth.user.is_host ? <ItemModal /> : <BecomeHostModal /> }
                </Container>

                    { this.props.auth.user.is_host ? userListings : null }
                
                </Row>
                </Container>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.auth
});

export default connect(
    mapStateToProps,
    { loadUser })
    (Account);