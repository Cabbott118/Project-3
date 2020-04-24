import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

const containerStyle = {
  width: '100%',
  paddingTop: '50px',
};

class LandingPage extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Row xs='1' sm='1' md='3'>
          <Col>
            <h3 style={{ color: '#ff3b3f' }} className='text-center'>
              Why Choose Us? <i className='fas fa-user-check'></i>
            </h3>
            <h5>
              Whether you're looking to rent, or list your personal trailer to
              earn some additional income, LOADCo is the right place for you.{' '}
              <br />
              <br /> Avoid the headache of going through a large company to rent
              something of theirs for an absurd price and connect with one of
              our many members who are listing their trailers at an affordable
              price, right next door!
            </h5>
          </Col>

          <Col>
            <h3 style={{ color: '#ff3b3f' }} className='text-center'>
              How It Works <i className='fas fa-hands-helping'></i>
            </h3>
            <h5>
              You can browse the site as much as you like without commiting to
              anything, but of course to rent and list, you will need to
              register an account with us. <br />
              <br /> Once an account is registered, you can immediately begin
              renting our posted trailers.
              <br /> If you wish to list a trailer of your own, you will need to
              complete some additional information, which can be found under the
              'Account' tab.
            </h5>
          </Col>

          <Col>
            <h3 style={{ color: '#ff3b3f' }} className='text-center'>
              Additional Stuff <i className='fas fa-question-circle'></i>
            </h3>
            <h5>
              Sample Text -- if these were meaningful words they will propably
              work a lil better
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
