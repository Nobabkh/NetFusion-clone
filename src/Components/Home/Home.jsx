import React from 'react';
import Hero from './Hero/Hero';
import LatestService from './LatestService/LatestService';
import AboutUsAndFeature from './AboutusAndFeature/AboutUsAndFeature';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <LatestService></LatestService>
            <AboutUsAndFeature></AboutUsAndFeature>
        </div>
    );
};

export default Home;