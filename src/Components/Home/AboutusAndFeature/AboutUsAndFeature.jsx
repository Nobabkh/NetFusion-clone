import React, { useEffect, useState } from "react";
import SectionHeaderLeftAligned from "../../SectionHeader/SectionHeaderLeftAligned";
import TitleDescriptionIcon from "./TitleDescriptionIcon";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsAndFeature = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Json/SiteData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])

  const aboutImage = data?.aboutUs?.image;
  const aboutSectionName = data?.aboutUs?.sectionName;
  const aboutTitle = data?.aboutUs?.title;
  const aboutDescription = data?.aboutUs?.description;
  const aboutIcons = data?.aboutUs?.icon;

  const featuresImage = data?.Features?.image;
  const featuresSectionName = data?.Features?.sectionName;
  const featuresTitle = data?.Features?.title;
  const featuresDescription = data?.Features?.description;
  const featuresIcons = data?.Features?.icon;

  return (
    <div className="border border-[#e7edf433] rounded-3xl py-16 px-3 lg:px-0 md:py-20 lg:py-36 mt-36 ">
      <div className="container max-w-screen-xl mx-auto  gap-6">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between flex flex-col-reverse items-start gap-6">
          <div className="flex-grow ">
            <TitleDescriptionIcon
              sectionName={aboutSectionName}
              title={aboutTitle}
              description={aboutDescription}
              icons={aboutIcons}
            ></TitleDescriptionIcon>
          </div>
          <div className="lg:w-[60%] md:w-full flex justify-end ">
            <img className="rounded-3xl w-full" data-aos-duration="2000" data-aos="zoom-in" src={aboutImage} alt="" />
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
            <img className="rounded-3xl w-full" data-aos-duration="2500" data-aos="zoom-in" src={featuresImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAndFeature;
