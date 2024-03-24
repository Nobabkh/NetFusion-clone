import React from "react";
import ServiceCards from "./ServiceCards";
import SectionHeader from "../../SectionHeader/SectionHeader";

const LatestService = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <SectionHeader></SectionHeader>
      </div>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default LatestService;
