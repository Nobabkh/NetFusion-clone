import React from 'react';
import Hero from './Hero/Hero';
import LatestService from './LatestService/LatestService';
import AboutUsAndFeature from './AboutusAndFeature/AboutUsAndFeature';
import CustomPrompts from '../CustomPrompts/CustomPrompts';
import SiteData from "../../../dist/Json/SiteData";



const Home = () => {
    return (
        <div>
            <Hero SiteData={SiteData}></Hero>
            <LatestService SiteData={SiteData}></LatestService>
            <AboutUsAndFeature SiteData={SiteData}></AboutUsAndFeature>
            <CustomPrompts SiteData={SiteData}></CustomPrompts>
        </div>
    );
};

export default Home;