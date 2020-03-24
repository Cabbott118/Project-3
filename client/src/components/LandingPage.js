import React, { Component } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import QuickSearch from './QuickSearch';
import About from './About';

const containerStyle = {
    backgroundColor: 'rgba(0, 0, 0, .8)',
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
                                <h4 className='text-center'>A bunch of random text for the side of quick search</h4>
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