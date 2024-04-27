import React, { useEffect, useState } from "react";
import textBackgroundImage from "/title-bg.jpg";
import HeroCard from "./HeroCard";
import RoundedButton from "../../RoundedButton";

const Hero = ({ SiteData }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // console.log(data);
  const textStyle = {
    backgroundImage: `url(${textBackgroundImage})`,
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline",
  };
  return (
    // p-[2rem] md:p-[2rem]
    <div className="p-[2rem] md:p-[2rem]">
      <div className="mb-28 container max-w-screen-xl mx-auto">
        <div className="w-[100%] md:w-[70%] md:text-[60px] lg:text-[84px] text-[52px] font-bold mx-auto mb-7 font-sans">
          <h1 style={textStyle}>{SiteData.hero?.title}</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-span-1 ">
              <img
                className="rounded-3xl h-auto max-w-full"
                src={SiteData.hero?.image}
                alt=""
              />
            </div>
            <div className="grid grid-cols-1 grid-rows-2 self-center">
              <div className="self-center mt-4 pb-5">
                <HeroCard></HeroCard>
              </div>
              <div>
                <p className="text-base text-left mt-8 mb-5 font-bold text-[#FFFFFFCC]">
                  {SiteData.hero?.description}
                </p>
                <RoundedButton text="Learn More"></RoundedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
