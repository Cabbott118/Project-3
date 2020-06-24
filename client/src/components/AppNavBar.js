import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

// Redux
import { connect } from 'react-redux';

// Components
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

const NavbarStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  color: 'white',
};

class AppNavBar extends Component {
  // Set state for Navbar Menu
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  // Set state to opposite of current state when toggled
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Fragment>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle
            tag='a'
            className='nav-link'
            style={{ color: 'white', cursor: 'pointer' }}
            caret
          >
            Account
          </DropdownToggle>
          <DropdownMenu style={NavbarStyle}>
            <DropdownItem className='dropDown'>
              <NavLink href='/account' style={{ color: 'white' }}>
                Profile
              </NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className='dropDown'>
              <Logout />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <Navbar dark expand='sm' className='' style={NavbarStyle}>
        <Container>
          <NavbarBrand href='/'>
            <strong style={{ color: '#ff3b3f' }}>LOGO</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/listings' style={{ color: 'white' }}>
                  Listings
                </NavLink>
              </NavItem>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavBar);
