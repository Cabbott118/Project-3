import React, { Component } from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap';
import QuickSearch from './QuickSearch';
import About from './About';

const containerStyle = {
    width: '100%',
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

                    <div>
                        <Row>
                            <div className='quickSearchSide'>
                                <h4>A bunch of random text for the side of quick search</h4>
                            </div>
                            <div className='quickSearchCol'>
                                <QuickSearch />
                            </div>
                        </Row>
                    </div>
                    <About />
                </Container>
            </div>
        );
    };
};

export default LandingPage;