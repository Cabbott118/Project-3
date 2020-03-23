import React, { Component } from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuickSearch from './QuickSearch';

const containerStyle = {
    width: '100%',
    paddingTop: '50px'
};

const rowStyle = {
    paddingTop: '50px'
};

class LandingPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {
        const { isAuthenticated } = this.props.auth;
        const guestText = (
            <Row style={rowStyle} xs='1' sm='1' md='3'>
                <Col>
                    <h3 style={{color: '#ff3b3f'}} className='text-center'>Why Choose Us? <i className="fas fa-user-check"></i></h3>
                    <h4>Whether you're looking to rent, or list your personal trailer to earn some additional income,
                        *BRAND NAME* is the right place for you. <br /><br /> Avoid the headache of going through a large company to rent something
                        of theirs for an absurd price and connect with one of our many members who are listing their trailers at an 
                        affordable price, right next door!
                    </h4>
                </Col>

                <Col>
                    <h3 style={{color: '#ff3b3f'}} className='text-center'>How It Works <i className="fas fa-hands-helping"></i></h3>
                    <h4>You can browse the site as much as you like without commiting to anything, but of course to rent and list, you will need to 
                        register an account with us. <br /><br /> Once an account is registered, you can immediately begin renting our posted trailers.<br /> If you wish
                        to list a trailer of your own, you will need to complete some additional information, which can be found under the 'Account' tab.
                    </h4>
                </Col>

                <Col>
                    <h3 style={{color: '#ff3b3f'}} className='text-center'>Additional Stuff <i className="fas fa-question-circle"></i></h3>
                    <h4>Sample Text -- if these were meaningful words they will propably work a lil better</h4>
                </Col>
            </Row>
        );

        const authText = (
            <div>
                <Row>
                    <Col>
                        <h4>A bunch of random text for the side of quick search</h4>
                    </Col>
                    <Col>
                        <QuickSearch />
                    </Col>
                </Row>
            </div>
        );
        
        return(
            <div style={containerStyle}>
                <Container>
                    <div>
                        <h1 className='text-center'> 
                            A MODERN SOLUTION FOR ALL YOUR TRAILER NEEDS
                        </h1>
                    </div>
                    <div style={{marginTop:'2rem'}}>
                    { isAuthenticated ? authText : guestText}
                    </div>
                    
                </Container>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(LandingPage);