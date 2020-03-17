import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

const NavbarStyle = {
    height: '8vh',
    backgroundColor: 'rgba(0, 0, 0, .8)'
};

class AppNavBar extends Component {
    // Set state for Navbar Menu
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    // Set state to opposite of current state when toggled
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span
                        className='navbar-text mr-3'
                    >
                        <strong>{ user ? `Welcome, ${user.first_name}` : '' }</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <span
                        className='navbar-text mr-3'
                        style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        <a href='/listings'>Listings</a>
                    </span>
                </NavItem>
                <NavItem>
                    <span
                        className='navbar-text mr-3'
                        style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        <a href='/account'>Account</a>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <span
                        className='navbar-text mr-3'
                        style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        <a href='/listings'>Listings</a>
                    </span>
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            // <div>
            <Navbar 
                dark
                expand='sm' 
                className='' 
                style={NavbarStyle}
            >
                <Container>
                    <NavbarBrand href='/'><strong style={{color: '#ff3b3f'}}>LOGO</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            { isAuthenticated ? authLinks : guestLinks }
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            // </div>
        );
    };
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);