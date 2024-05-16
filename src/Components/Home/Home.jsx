import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero/Hero";
import LatestService from "./LatestService/LatestService";
import AboutUsAndFeature from "./AboutusAndFeature/AboutUsAndFeature";
import CustomPrompts from "../CustomPrompts/CustomPrompts";
import NewsLetter from "./NewsLetter/NewsLetter";
import data from "../../Json/SiteData.js";
import Blogs from "./Blogs/Blogs";

const Home = ({ selector, setSelector }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     console.log(data)});
  // }, []);
  const homeRef = useRef(null);
  const latestServiceRef = useRef(null);
  const aboutUsAndFeatureRef = useRef(null);
  const customPromptsRef = useRef(null);
  const newsLetterRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  switch (selector) {
    case 1:
      scrollToSection(homeRef);
      setSelector(0);
      break;
    case 2:
      scrollToSection(aboutUsAndFeatureRef);
      setSelector(0);
      break;
    case 3:
      scrollToSection(customPromptsRef );
      setSelector(0);
      break;
    case 4:
      scrollToSection(latestServiceRef);
      setSelector(0);
      break;
    case 5:
      scrollToSection(newsLetterRef);
      setSelector(0);
      break;
    default:
      break;
  }
 console.log(selector);
  return (
    <div>
      <div ref={homeRef}>
        <Hero SiteData={data}></Hero>
      </div>
      <div ref={latestServiceRef}>
        <LatestService SiteData={data}></LatestService>
      </div>
      <div ref={aboutUsAndFeatureRef}>
        <AboutUsAndFeature SiteData={data}></AboutUsAndFeature>
      </div>
      <div ref={customPromptsRef}>
        <CustomPrompts SiteData={data}></CustomPrompts>
      </div>
      <div ref={newsLetterRef}>
        <NewsLetter SiteData={data}></NewsLetter>
      </div>
      {/* <Blogs SiteData={data}></Blogs> */}
    </div>
  );
};

export default Home;
