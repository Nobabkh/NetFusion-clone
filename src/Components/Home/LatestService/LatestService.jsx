import React, { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";
import SectionHeader from "../../SectionHeader/SectionHeader";

const LatestService = ({ SiteData }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const headerTitle = SiteData?.latestService?.title;
  const sectionName = SiteData?.latestService?.sectionName;

  return (
    // p-[2rem] md:p-[2rem]
    <div className="p-[2rem] md:p-[2rem]">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex justify-center mb-16">
          <SectionHeader
            title={headerTitle}
            sectionName={sectionName}
          ></SectionHeader>
        </div>
        <ServiceCards SiteData={SiteData}></ServiceCards>
      </div>
    </div>
  );
};

export default LatestService;
