import React from "react";

const SectionHeaderLeftAligned = ({sectionName, title}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="py-1 px-3 text-xs text-[#02C173] font-bold border border-[#02C173] rounded-md w-max mb-6">
        {sectionName}
      </div>
      <div className="flex justify-start">
        <h1 className="text-3xl lg:text-5xl text-left md:text-4xl font-bold  text-white mb-6">
        {title}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeaderLeftAligned;
