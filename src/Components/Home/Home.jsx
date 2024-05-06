import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import LatestService from './LatestService/LatestService';
import AboutUsAndFeature from './AboutusAndFeature/AboutUsAndFeature';
import CustomPrompts from '../CustomPrompts/CustomPrompts';
import NewsLetter from './NewsLetter/NewsLetter';
import data from '../../../public/Json/SiteData';
import Blogs from './Blogs/Blogs';



const Home = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch("Json/SiteData.json")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data)
    //     console.log(data)});
    // }, []);

    return (
        <div>
            <Hero SiteData={data}></Hero>
            <LatestService SiteData={data}></LatestService>
            <AboutUsAndFeature SiteData={data}></AboutUsAndFeature>
            <CustomPrompts SiteData={data}></CustomPrompts>
            <NewsLetter SiteData={data}></NewsLetter>
            {/* <Blogs SiteData={data}></Blogs> */}
        </div>
    );
};

export default Home;