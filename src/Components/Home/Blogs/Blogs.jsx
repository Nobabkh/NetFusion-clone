import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";

const Blogs = () => {
  return (
    <div className="p-[2rem] md:p-[2rem]">
      <div className="py-32 lg:container lg:max-w-screen-xl lg:mx-auto">
        <div className="mb-16">
          <SectionHeader
            title="The Latest News and Developments in Artificial Intelligence"
            sectionName="Blogs"
          ></SectionHeader>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
