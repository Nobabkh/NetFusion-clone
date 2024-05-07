import React, { useEffect, useState } from "react";
import SectionHeaderLeftAligned from "../../SectionHeader/SectionHeaderLeftAligned";
import TitleDescriptionIcon from "./TitleDescriptionIcon";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsAndFeature = ({SiteData}) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  useEffect(() => {
    AOS.init();
  }, [])

  const aboutImage = SiteData?.aboutUs?.image;
  const aboutSectionName = SiteData?.aboutUs?.sectionName;
  const aboutTitle = SiteData?.aboutUs?.title;
  const aboutDescription = SiteData?.aboutUs?.description;
  const aboutIcons = SiteData?.aboutUs?.icon;

  const featuresImage = SiteData?.Features?.image;
  const featuresSectionName = SiteData?.Features?.sectionName;
  const featuresTitle = SiteData?.Features?.title;
  const featuresDescription = SiteData?.Features?.description;
  const featuresIcons = SiteData?.Features?.icon;

  return (
    // 
    <div className="p-[2rem] md:p-[2rem]">
      <div className="border border-[#e7edf433] rounded-3xl py-16 px-3 lg:px-0 md:py-20 lg:py-36 mt-36">
      <div className="container max-w-screen-xl mx-auto  gap-6">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between flex flex-col-reverse items-start gap-6">
          <div className="">
            <TitleDescriptionIcon
              sectionName={aboutSectionName}
              title={aboutTitle}
              description={aboutDescription}
              icons={aboutIcons}
            ></TitleDescriptionIcon>
          </div>
          <div className="lg:w-full md:w-full flex justify-end ">
            <img className="rounded-3xl w-full" data-aos-duration="1500" data-aos="zoom-in" src={aboutImage} alt="" />
          </div>
        </div>


        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between flex flex-col-reverse items-start gap-6 lg:gap-32 mt-10">
          <div className="w-full">
            <TitleDescriptionIcon
              sectionName={featuresSectionName}
              title={featuresTitle}
              description={featuresDescription}
              icons={featuresIcons}
            ></TitleDescriptionIcon>
          </div>
          <div className="lg:w-[80%] md:w-full flex justify-end ">
            <img className="rounded-3xl w-full h-[445px]" data-aos-duration="1500" data-aos="zoom-in" src={featuresImage} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsAndFeature;
