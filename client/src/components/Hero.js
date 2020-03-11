import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import LandingPage from './LandingPage';
import Background from '../images/backgroundOne.jpg';


const HeroStyle = {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    color: 'white'
}

class Hero extends Component {

    render() {
        return(
            <div style={HeroStyle}>
                <AppNavBar />
                <LandingPage />
            </div>       
        );
    }
}


export default Hero;