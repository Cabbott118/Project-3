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
    paddingTop: '15px'
};

const lookUpStyle = {
    backgroundColor: '#efefef',
    borderRadius: '5px',
    height: '60vh',
    width: '100%',
}

class LandingPage extends Component {

    render() {
        
        return(
                <div style={containerStyle}>
                    <Container>
                    <Row>
                        <Col>
                            <Container>
                                <div>
                                    <h1 className='text-left'> 
                                        A MODERN SOLUTION FOR ALL YOUR TRAILER NEEDS
                                    </h1>
                                </div>
                            </Container>
                        </Col>

                        <Col>
                            <div style={lookUpStyle}>
                            <Container>
                                
                                    <h3 style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        paddingTop: '1rem'
                                    }}>
                                        Check out what we currently have listed.
                                        don't hate on my ugly box. it'll be pretty l8er
                                    </h3>
                                
                            </Container>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
        );
    };
};

export default LandingPage;