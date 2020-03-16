import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
// import ItemList from './ItemList';
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

// const accountStyles = {
//     color: 'black'
// };

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

                    <h4>Account Owner:</h4>
                    <h5>{user.first_name} {user.last_name}</h5>
                    <h4>Registered Email:</h4>
                    <h5>{user.email}</h5>
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