import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

const landingUnderStyle = {
    background: '#fff',
    padding: '10px',
    marginTop: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
};

class LandingUnder extends Component {
    
    render() {
        
        return(
            <div>
                <Container style={landingUnderStyle}>
                    <div className='mt-2'>
                    <strong><h4>Overview</h4></strong>
                    <h6>
                    *COMPANY NAME* a platform for individuals or
                    businesses to rent trailers to the public.
                    </h6>
                    </div>
                    <div className='mt-4'>
                    <strong><h4>How it works</h4></strong>
                    <h6>
                    Anyone wishing to use *COMPANY NAME*'s features
                    will need to register an account with us.
                    If you are here to rent a trailer, simply
                    browse our current listings and select the one that
                    best fits your needs.
                    If you would like to host your trailer, there is an
                    option in the account settings that will allow you to
                    activate your account as a registered host. It will
                    require some additional info about yourself and your trailer.
                    </h6>
                    </div>
                    <div className='mt-4'>
                    <strong><h4>Benefits</h4></strong>
                    <h6>
                    National access to unique equipment that today’s rental companies don’t offer 
                    <br></br>
                    Ability to pick up the available equipment at convenience
                    </h6>
                    </div>
                </Container>
            </div>
        );
    };
};

export default LandingUnder;