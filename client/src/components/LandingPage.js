import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

const containerStyle = {
    background: 'rgba(0, 0, 0, .8)',
    height: '92vh',
    width: '100%'
};

class LandingPage extends Component {

    render() {
        
        return(
                <div style={containerStyle}>
                    <Container>
                        <h1 className='text-left'>Welcome to *COMPANY NAME*</h1>
                        <h3 className='text-left'>A modern solution for all of your trailer needs</h3>
                    </Container>
                </div>
        );
    };
};

export default LandingPage;