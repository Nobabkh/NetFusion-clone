import React from "react";

const SectionHeader = ({title, sectionName}) => {
  return (
    <div className="flex flex-col items-center gap-4  ">
      <div className="py-1 px-3 text-xs text-[#02C173] font-bold border border-[#02C173] rounded-md w-max">
        {sectionName}
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-5xl md:text-[37px] font-bold md:w-[60%] text-white">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
