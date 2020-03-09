import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

import Background from '../images/backgroundOne.jpg';

const sectionStyle = {
    backgroundImage: `url(${Background})`,
    height: '45vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white'
};

const containerStyle = {
    background: 'rgba(0, 0, 0, .5)',
    height: '100%',
    width: '100%'
};

class LandingPage extends Component {

    render() {
        
        return(
            <div style={sectionStyle}>
                <Container style={containerStyle}>
                    <h1 className='text-left'>Welcome to *COMPANY NAME*</h1>
                    <h3 className='text-left'>A modern solution for all of your trailer needs</h3>
                </Container>
            </div>
        );
    };
};

export default LandingPage;