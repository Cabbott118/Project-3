import React, { Component } from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap';

const containerStyle = {
    background: 'rgba(0, 0, 0, .8)',
    height: '92vh',
    width: '100%',
    paddingTop: '50px'
};

const rowStyle = {
    paddingTop: '50px'
};

class LandingPage extends Component {

    render() {
        
        return(
            <div style={containerStyle}>
                <Container>
                    <div>
                        <h1 className='text-center'> 
                            A MODERN SOLUTION FOR ALL YOUR TRAILER NEEDS
                        </h1>
                    </div>
                    {/* <Container> */}

                    <Row style={rowStyle} xs='1' sm='1' md='3'>
                        <Col>
                        <h3 style={{color: '#ff3b3f'}} className='text-center'>Why Choose Us?</h3>
                        <h4>Whether you're looking to rent, or list your personal trailer to earn some additional income,
                            *BRAND NAME* is the right place for you. <br /><br /> Avoid the headache of going through a large company to rent something
                            of theirs for an absurd price and connect with one of our many members who are listing their trailers at an 
                            affordable price, right next door!
                        </h4>
                        </Col>

                        <Col>
                        <h3 style={{color: '#ff3b3f'}} className='text-center'>How It Works</h3>
                        <h4>You can browse the site as much as you like without commiting to anything, but of course to rent and list, you will need to 
                            register an account with us. <br /><br /> Once an account is registered, you can immediately begin renting our posted trailers.<br /> If you wish
                            to list a trailer of your own, you will need to complete some additional information, which can be found under the 'Account' tab.
                        </h4>
                        </Col>

                        <Col>
                        <h3 style={{color: '#ff3b3f'}} className='text-center'>Additional Stuff</h3>
                        <h4>Sample Text -- if these were meaningful words they will propably work a lil better</h4>
                        </Col>
                    </Row>

                    {/* </Container> */}
                </Container>
            </div>
        );
    };
};

export default LandingPage;