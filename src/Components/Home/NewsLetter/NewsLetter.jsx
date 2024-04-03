import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Description from "../../SectionHeader/Description";
import Email from "./Email";


const NewsLetter = ({ SiteData }) => {
  const title = SiteData?.newsLetter?.title;
  const sectionName = SiteData?.newsLetter?.sectionName;
  return (
    <div>
      <div className="border-2 border-[#e7edf433] rounded-3xl py-16 px-3 lg:px-0 md:py-20 lg:py-20  relative">
        <div className="mb-6">
          <SectionHeader
            title={title}
            sectionName={sectionName}
          ></SectionHeader>
        </div>
        <div className="flex justify-center">
            <Description></Description>
        </div>
        <div className="flex justify-center mt-5">
          <Email></Email>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
