import React, { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";
import SectionHeader from "../../SectionHeader/SectionHeader";

const LatestService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Json/SiteData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const headerTitle = data?.latestService?.title;
  const sectionName = data?.latestService?.sectionName; 

  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="flex justify-center">
        <SectionHeader title={headerTitle} sectionName={sectionName}></SectionHeader>
      </div>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default LatestService;
