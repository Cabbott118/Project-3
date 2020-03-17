import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ItemList from './ItemList';
import ItemModal from './ItemModal';
import {
    // Button,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import PropTypes from 'prop-types';


const containerStyles = {
    marginTop: '2rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    width: '80vw',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
};

const detailsStyle = {
    marginTop: '1rem'
}

class Account extends Component {
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
        }
        return (
            <div>
                <AppNavBar />
                <Container style={containerStyles}>
                    <h4 style={{
                        borderBottom: '2px solid #888888',
                        paddingBottom: '1rem'
                    }} className='text-center mb-2'>
                        Account Details
                    </h4>

                    <h4 style={detailsStyle}>Account Owner:</h4>
                    <h5>{user.first_name} {user.last_name}</h5>
                    <h4 style={detailsStyle}>Registered Email:</h4>
                    <h5>{user.email}</h5>
                </Container>

                <Container style={containerStyles}>
                    <h4 style={{
                        borderBottom: '2px solid #888888',
                        paddingBottom: '1rem'
                    }} className='text-center mb-2'>
                        Current Listings for: {user.email}
                    </h4>
                    <ItemModal />
                    <ItemList />
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