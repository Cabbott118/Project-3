import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import LandingPage from './LandingPage';
import Background from '../images/backgroundOne.jpg';


const HeroStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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