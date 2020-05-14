import React, { Component } from 'react';
import { Container } from 'reactstrap';
import About from './About';
import QuickSearch from './QuickSearch';

const containerStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  minHeight: '100vh',
  width: '100%',
  paddingTop: '50px',
};

class LandingPage extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Container>
          <div>
            <h1 className='text-center'>
              A MODERN SOLUTION FOR ALL YOUR TRAILER NEEDS
            </h1>
          </div>
          <QuickSearch />
          <About />
        </Container>
      </div>
    );
  }
}

export default LandingPage;
