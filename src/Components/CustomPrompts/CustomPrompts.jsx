import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import DescriptionCard from "./DescriptionCard";
import DescriptionCards from "./DescriptionCards";

const CustomPrompts = ({ SiteData }) => {
  const title = SiteData?.customPrompts?.title;
  const sectionName = SiteData?.customPrompts?.sectionName;
  return (
    <div className="py-32 lg:container lg:max-w-screen-xl lg:mx-auto">
      <div className="mb-16">
        <SectionHeader title={title} sectionName={sectionName}></SectionHeader>
      </div>
      <DescriptionCards SiteData={SiteData}></DescriptionCards>
    </div>
  );
};

export default CustomPrompts;
