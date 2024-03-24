import React from "react";

const SectionHeader = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-20">
      <div className="py-1 px-3 text-xs text-[#02C173] font-bold border border-[#02C173] rounded-md w-max">
        Latest Service
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold md:w-[60%] text-white">Technology that design makes life easier</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
