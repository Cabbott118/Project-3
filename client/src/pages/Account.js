import React, { Component } from 'react';
import BecomeHostModal from '../components/BecomeHostModal';
import ItemList from '../components/ItemList';
import ItemModal from '../components/ItemModal';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import PropTypes from 'prop-types';

const tabHeader = {
  borderBottom: '2px solid #888888',
  paddingBottom: '1rem',
};

const tabContainerStyle = {
  paddingTop: '1rem',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
};

const detailsStyle = {
  marginTop: '1rem',
};

class Account extends Component {
  state = {
    activeTab: '1',
  };

  static propTypes = {
    loadUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { activeTab } = this.state;
    const { user } = this.props.auth;

    if (!user) {
      return null;
    }

    // If user is registered as Host, populate Account page with userListings and hostInformation
    const hostInformation = (
      <div>
        <h4 style={detailsStyle}>Location:</h4>
        <h5>{user.user_location}</h5>
        <h4 style={detailsStyle}>Phone Number:</h4>
        <h5>{user.user_phone}</h5>
        <ItemModal />
      </div>
    );

    const accountTab = (
      <Container className='accountDetails'>
        <h4 style={tabHeader} className='text-center mb-2'>
          Account Details
        </h4>
        {user.is_admin ? <p>Administrator Account</p> : null}
        <h4 style={detailsStyle}>Account Owner:</h4>
        <h5>
          {user.first_name} {user.last_name}
        </h5>
        <h4 style={detailsStyle}>Registered Email:</h4>
        <h5>{user.email}</h5>
        {user.is_host ? hostInformation : <BecomeHostModal />}
      </Container>
    );

    const rentedItems = (
      <Container className='rentedDetails'>
        <h4 style={tabHeader} className='text-center mb-2'>
          Items You've Rented
        </h4>
        {user.userRented ? (
          <rentedItemsList />
        ) : (
          <h4 className='text-center'>
            Looks like you're not currently renting!
          </h4>
        )}
      </Container>
    );

    const userListings = (
      <Container className='listingDetails'>
        <h4 style={tabHeader} className='text-center mb-2'>
          Current Listings for: {user.email}
        </h4>
        {user.is_host ? <ItemList /> : null}
      </Container>
    );

    return (
      <Container style={tabContainerStyle}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Account
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Rentals
            </NavLink>
          </NavItem>

          {/* Check if user is host. If host, show tab */}
          {user.is_host ? (
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === '3',
                })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Listings
              </NavLink>
            </NavItem>
          ) : null}
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>{activeTab === '1' ? accountTab : null}</TabPane>
          <TabPane tabId='2'>{activeTab === '2' ? rentedItems : null}</TabPane>
          <TabPane tabId='3'>{activeTab === '3' ? userListings : null}</TabPane>
        </TabContent>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Account);
